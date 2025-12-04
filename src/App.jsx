import { Recycle } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { BinsTable } from "./components/BinsTable";
import { ErrorResult } from "./components/ErreurResult";
import { ErrorSection } from "./components/ErrorSection";
import { ImagePreviewSection } from "./components/ImagePreviewSection";
import { LandingPage } from "./components/Landing";
import { StatusText } from "./components/StatusText";
import { SuccessResult } from "./components/SuccessResult";
import "./index.css";
import { API_ENDPOINT, CATEGORIES } from "./Utils";

/* =========================
   Main App (keeps entire game logic)
   - When ready && !cameraActive show LandingPage with UploadSection inside hero
   ========================= */
const App = () => {
  const [gameState, setGameState] = useState("ready");
  const [, setUploadedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [correctCategory, setCorrectCategory] = useState(null);
  const [recyclingAdvice, setRecyclingAdvice] = useState("");
  const [userSelection, setUserSelection] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

  const resetGame = useCallback(() => {
    setGameState("ready");
    setUploadedFile(null);
    setImagePreviewUrl("");
    setCorrectCategory(null);
    setRecyclingAdvice("");
    setUserSelection(null);
  }, []);

  const uploadAndClassify = useCallback(async (file) => {
    if (!file) return;

    setUploadedFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
    setGameState("classifying");
    setCorrectCategory(null);
    setRecyclingAdvice("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const maxRetries = 3;
      let currentRetry = 0;
      let response;

      while (currentRetry < maxRetries) {
        try {
          response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: formData,
          });

          if (response.status === 429 || response.status >= 500) {
            if (currentRetry === maxRetries - 1)
              throw new Error(
                "Erreur de serveur persistante ou limite de taux atteinte."
              );
            const delay = Math.pow(2, currentRetry) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            currentRetry++;
          } else if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
          } else {
            break;
          }
        } catch (e) {
          if (
            e.message.startsWith("Erreur HTTP") ||
            e.message.startsWith("Erreur de serveur")
          ) {
            throw e;
          }
          if (currentRetry === maxRetries - 1)
            throw new Error(
              "Échec de la connexion réseau après plusieurs tentatives."
            );
          const delay = Math.pow(2, currentRetry) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          currentRetry++;
        }
      }

      const data = await response.json();
      console.log("Response data from API : ", data);
      if (data.detections && data.detections.length > 0) {
        const detection = data.detections[0];
        const categoryName = detection.class_name || "GLASS";
        const advice =
          detection.recycling_advice || "Aucun conseil de recyclage fourni.";

        if (CATEGORIES.includes(categoryName)) {
          setCorrectCategory(categoryName);
          setRecyclingAdvice(advice);
          setGameState("awaiting_selection");
        } else {
          throw new Error(`Catégorie inconnue retournée: ${categoryName}`);
        }
      } else {
        throw new Error("Aucune détection trouvée dans la réponse de l'API.");
      }
    } catch (error) {
      console.error("Erreur de classification:", error);
      setGameState("error");
      setRecyclingAdvice(`Erreur: ${error.message}. Veuillez réessayer.`);
    }
  }, []);

  const checkSelection = useCallback(
    (selectedCategory) => {
      if (gameState !== "awaiting_selection") return;
      setUserSelection(selectedCategory);
      setGameState("result_displayed");
    },
    [gameState]
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) uploadAndClassify(file);
  };

  const openCamera = async () => {
    try {
      // Set camera active FIRST so the video element renders
      setCameraActive(true);

      // Get the stream
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      setTimeout(() => {
        if (videoRef && videoRef.current) {
          videoRef.current.srcObject = stream;

          // Wait for loadedmetadata event
          videoRef.current.onloadedmetadata = () => {
            console.log("Video metadata loaded, playing...");
            videoRef.current.play().catch((err) => {
              console.error("Erreur lors de la lecture vidéo:", err);
            });
          };
        }
      }, 0);
    } catch (error) {
      console.error("Erreur d'accès à la caméra:", error);
      setCameraActive(false);

      // More specific error messages
      if (error.name === "NotAllowedError") {
        alert("Permission refusée. Vérifiez les paramètres de la caméra.");
      } else if (error.name === "NotFoundError") {
        alert("Aucune caméra trouvée sur cet appareil.");
      } else if (error.name === "NotReadableError") {
        alert("La caméra est déjà utilisée par une autre application.");
      } else {
        alert("Impossible d'accéder à la caméra. Vérifiez les permissions.");
      }
    }
  };

  const capturePhoto = () => {
    if (videoRef && videoRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Get actual video dimensions
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      if (canvas.width === 0 || canvas.height === 0) {
        alert("Impossible de capturer la photo. La caméra n'est pas prête.");
        return;
      }

      context.drawImage(videoRef.current, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const file = new File([blob], "camera-capture.jpg", {
              type: "image/jpeg",
            });
            closeCamera();
            uploadAndClassify(file);
          }
        },
        "image/jpeg",
        0.95
      );
    }
  };

  const closeCamera = () => {
    if (videoRef && videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const globalStyles = `@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-8px); } 40%, 80% { transform: translateX(8px); } }`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 p-4 sm:p-8 font-sans">
      <style>{globalStyles}</style>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 rounded-full p-2">
              <Recycle className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <div className="font-extrabold text-lg">EcoSort</div>
              <div className="text-xs text-gray-500">
                Playful waste sorting game
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={resetGame}
              className="text-sm px-3 py-1 rounded-full bg-white border border-green-200 shadow-sm hover:bg-green-50"
            >
              Reset
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm px-3 py-1 rounded-full bg-green-600 text-white shadow hover:brightness-105"
            >
              Home
            </button>
          </div>
        </div>

        <StatusText gameState={gameState} />

        {gameState === "error" && (
          <ErrorSection message={recyclingAdvice} onTryAgain={resetGame} />
        )}

        {gameState === "ready" && !cameraActive && (
          <LandingPage
            onFileChange={handleFileChange}
            onCameraClick={openCamera}
          />
        )}

        {/* CAMERA */}
        {cameraActive && (
          <div className="flex flex-col items-center justify-center space-y-4">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full max-w-sm h-auto rounded-xl shadow-lg border-4 border-blue-400 bg-black block"
              style={{ aspectRatio: "4/3", objectFit: "cover" }}
            />
            <div className="flex gap-4 w-full">
              <button
                onClick={capturePhoto}
                className="flex-1 bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              >
                📸 Prendre une Photo
              </button>
              <button
                onClick={closeCamera}
                className="flex-1 bg-gray-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
              >
                ✕ Fermer
              </button>
            </div>
          </div>
        )}

        {gameState !== "ready" && gameState !== "error" && (
          <ImagePreviewSection
            imagePreviewUrl={imagePreviewUrl}
            isClassifying={gameState === "classifying"}
          />
        )}

        {(gameState === "awaiting_selection" ||
          gameState === "result_displayed") && (
          <>
            <BinsTable
              gameState={gameState}
              onBinClick={checkSelection}
              userSelection={userSelection}
              correctCategory={correctCategory}
            />
            {gameState === "result_displayed" &&
              (userSelection === correctCategory ? (
                <SuccessResult
                  userSelection={userSelection}
                  recyclingAdvice={recyclingAdvice}
                  onReplay={resetGame}
                />
              ) : (
                <ErrorResult
                  userSelection={userSelection}
                  correctCategory={correctCategory}
                  recyclingAdvice={recyclingAdvice}
                  onReplay={resetGame}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
