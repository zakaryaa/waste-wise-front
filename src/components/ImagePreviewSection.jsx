import { RefreshCw } from "lucide-react";

// --- Composant: Aperçu et Chargement ---
export const ImagePreviewSection = ({ imagePreviewUrl, isClassifying }) => (
  <div className="mb-8">
    {imagePreviewUrl && (
      <div className="mb-6 flex justify-center">
        <img
          src={imagePreviewUrl}
          alt="Article à classifier"
          className="w-full max-w-xs h-auto rounded-xl shadow-lg border-4 border-gray-200 object-cover"
        />
      </div>
    )}
    {isClassifying && (
      <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-2" />
        <p className="text-blue-700 font-semibold">
          Analyse de l'image par l'API...
        </p>
        <p className="text-sm text-blue-500">Veuillez patienter.</p>
      </div>
    )}
  </div>
);
