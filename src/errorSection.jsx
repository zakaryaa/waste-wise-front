import { RefreshCw } from "lucide-react";

// --- Composant: Section Erreur ---
export const ErrorSection = ({ message, onTryAgain }) => (
  <div className="text-center p-6 bg-red-100 border-l-4 border-red-500 text-red-700 mb-6 rounded-lg">
    <p className="font-semibold">{message}</p>
    <button
      onClick={onTryAgain}
      className="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition duration-300"
    >
      <RefreshCw className="w-4 h-4 inline mr-1" /> Réessayer
    </button>
  </div>
);
