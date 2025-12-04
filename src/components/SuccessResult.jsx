import { CheckCircle } from "lucide-react";
import { TRASH_BINS } from "../Utils";
import { RecyclingAdvice } from "./RecycleAdvice";
import { ReplayButton } from "./ReplayButton";
// --- Composant: Résultat Correct ---
export const SuccessResult = ({ userSelection, recyclingAdvice, onReplay }) => (
  <div className="p-4 rounded-xl shadow-inner mt-6">
    <div className="text-center">
      <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
      <h3 className="text-xl font-bold text-green-700 mb-3">
        Congratulations ! You got the right answer
      </h3>
      <p className="text-sm text-gray-700 italic mb-4">
        Your selection : ({TRASH_BINS[userSelection].label}) was the correct
        choice.
      </p>
    </div>
    <RecyclingAdvice advice={recyclingAdvice} />
    <ReplayButton onReplay={onReplay} />
  </div>
);
