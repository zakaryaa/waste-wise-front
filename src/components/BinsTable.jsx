import { CATEGORIES } from "./../Utils";
import { BinCard } from "./BinCard";
export const BinsTable = ({
  gameState,
  onBinClick,
  userSelection,
  correctCategory,
}) => (
  <div className="w-full max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center gap-6 mb-8 py-4">
      {CATEGORIES.map((category) => (
        <BinCard
          key={category}
          category={category}
          onClick={onBinClick}
          isSelectable={gameState === "awaiting_selection"}
          isCorrect={userSelection === category && category === correctCategory}
          isChosen={userSelection === category}
        />
      ))}
    </div>
  </div>
);
