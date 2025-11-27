import { XCircle } from "lucide-react";
import { TRASH_BINS } from "./constants";
import { RecyclingAdvice } from "./recycleAdvice";
import { ReplayButton } from "./replayButton";
// --- Composant: Résultat Incorrect ---
export const ErrorResult = ({
  userSelection,
  correctCategory,
  recyclingAdvice,
  onReplay,
}) => (
  <div className="p-4 rounded-xl shadow-inner mt-6">
    <div className="text-center">
      <XCircle className="w-10 h-10 text-red-500 mx-auto mb-2" />
      <h3 className="text-xl font-bold text-red-700 mb-3">
        Oups ! C'est INCORRECT.
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Vous avez choisi <strong>{TRASH_BINS[userSelection]?.labelFr}</strong>.
        La bonne catégorie est :{" "}
        <strong>{TRASH_BINS[correctCategory]?.labelFr}</strong>.
      </p>
    </div>
    <RecyclingAdvice advice={recyclingAdvice} />
    <ReplayButton onReplay={onReplay} />
  </div>
);
