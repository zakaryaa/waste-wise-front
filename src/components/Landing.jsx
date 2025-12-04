// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Recycle } from "lucide-react";
import { useEffect } from "react";
import { UploadSection } from "./UploadSection";

/* =========================
   LandingPage (separate component inside file)
   - Uses UploadSection as CTA inside hero
   - Kid-friendly design, SVGs, Framer Motion
   ========================= */

export const LandingPage = ({ onFileChange, onCameraClick }) => {
  useEffect(() => {
    // small tilt-follow for hero decorative blob
    const handleMove = (e) => {
      const blob = document.getElementById("hero-blob");
      if (!blob) return;
      const rect = blob.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      blob.style.transform = `translate(${dx * 6}px, ${dy * 6}px) rotate(${
        dx * 6
      }deg)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-10"
    >
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        {/* Decorative SVG blobs */}
        <div className="absolute -z-10 left-0 top-0 pointer-events-none">
          <svg
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#A7F3D0" />
                <stop offset="1" stopColor="#BBF7D0" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="120" r="160" fill="url(#g1)" opacity="0.22" />
          </svg>
        </div>

        <div className="space-y-4 px-2">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-200 to-green-100 px-3 py-1 rounded-full">
            <Recycle className="w-6 h-6 text-green-700" />
            <span className="font-semibold text-green-800">
              EcoSort — Learn & Play
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Sort trash like a superhero 🌍♻️
          </h1>

          <p className="text-gray-700 max-w-xl">
            Upload a photo or take one with your camera. The AI will guess the
            trash type and give friendly recycling tips — then you try to beat
            the AI!
          </p>

          {/* CTA area: UploadSection injected here */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-3">
              <UploadSection
                onFileChange={onFileChange}
                onCameraClick={onCameraClick}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-full border-2 border-yellow-400 bg-yellow-300 font-semibold shadow-md hover:brightness-105"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight / 2,
                    behavior: "smooth",
                  })
                }
              >
                See how it works
              </motion.button>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="rounded-lg p-3 bg-white shadow-sm flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path
                  fill="#10B981"
                  d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14h-2v-6h2zM12 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
              <div className="text-sm">
                <div className="font-semibold">Kid-friendly</div>
                <div className="text-gray-500">
                  Simple language & bright visuals
                </div>
              </div>
            </div>
            <div className="rounded-lg p-3 bg-white shadow-sm flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path fill="#3B82F6" d="M12 2l3 7h-6l3-7zM6 9h12v11H6z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold">Interactive</div>
                <div className="text-gray-500">Play, learn, and re-try</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero illustration / images for kids */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
        >
          <div id="hero-blob" className="relative w-full max-w-md">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/image-1.png"
                alt="hero"
                className="w-full h-72 object-cover"
              />
            </motion.div>

            {/* playful mascot SVG */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -right-6"
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                <g>
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="#F0FDF4"
                    stroke="#34D399"
                    strokeWidth="2"
                  />
                  <circle cx="45" cy="50" r="6" fill="#064E3B" />
                  <circle cx="75" cy="50" r="6" fill="#064E3B" />
                  <path
                    d="M40 78c6 8 34 8 40 0"
                    stroke="#064E3B"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="30"
                    height="6"
                    rx="3"
                    fill="#34D399"
                  />
                </g>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        variants={fadeUp}
        className="grid md:grid-cols-3 gap-6 items-start"
      >
        <motion.div className="p-4 bg-white rounded-2xl shadow-md">
          <h4 className="font-bold">1. Snap or Upload</h4>
          <p className="text-sm text-gray-600 mt-2">
            Use your camera or pick a photo.
          </p>
        </motion.div>
        <motion.div className="p-4 bg-white rounded-2xl shadow-md">
          <h4 className="font-bold">2. AI guesses</h4>
          <p className="text-sm text-gray-600 mt-2">
            The model predicts the trash type and confidence.
          </p>
        </motion.div>
        <motion.div className="p-4 bg-white rounded-2xl shadow-md">
          <h4 className="font-bold">3. You play</h4>
          <p className="text-sm text-gray-600 mt-2">
            Select the correct bin and get friendly tips.
          </p>
        </motion.div>
      </motion.section>

      {/* CAROUSEL / IMAGES */}
      <motion.section variants={fadeUp} className="grid md:grid-cols-3 gap-4">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/assets/image-2.png"
            alt="slide 2"
            className="w-full h-40 object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/assets/image-3.png"
            alt="slide 3"
            className="w-full h-40 object-cover"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-br from-yellow-50 to-green-50 p-6"
        >
          <div className="text-center">
            <div className="font-bold">Play & Learn</div>
            <div className="text-sm text-gray-600 mt-1">
              Fun facts and recycling badges
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};
