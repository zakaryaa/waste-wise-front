import { XCircle } from "lucide-react";
import { RecyclingAdvice } from "./RecycleAdvice";
import { ReplayButton } from "./ReplayButton";
import { TRASH_BINS } from "./Utils";
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
        Oups ! That was Wrong .
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        You have choosen <strong>{TRASH_BINS[userSelection]?.labelEn}</strong>.
        The right answer was {correctCategory}
        <strong>{TRASH_BINS[correctCategory]?.labelFr}</strong>.
      </p>
    </div>
    <RecyclingAdvice advice={recyclingAdvice} />
    <ReplayButton onReplay={onReplay} />
  </div>
);
