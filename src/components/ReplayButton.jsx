import { RefreshCw } from "lucide-react";

// --- Composant: Bouton Rejouer ---
export const ReplayButton = ({ onReplay }) => (
  <button
    onClick={onReplay}
    className="w-full mt-6 py-3 px-6 bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:bg-indigo-600 transition duration-300 flex items-center justify-center text-lg"
  >
    <RefreshCw className="w-5 h-5 mr-2" />
    Rejouer
  </button>
);
