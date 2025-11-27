// --- Composant: Bouton Téléchargement ---

import { Upload } from "lucide-react";

// --- Composant: Bouton Téléchargement et Caméra ---
export const UploadSection = ({ onFileChange, onCameraClick }) => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <label className="w-full cursor-pointer bg-green-500 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center text-lg">
      <Upload className="w-6 h-6 mr-3" />
      Télécharger une Image
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />
    </label>
    <button
      onClick={onCameraClick}
      className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center text-lg"
    >
      📷 Ouvrir la Caméra
    </button>
  </div>
);
