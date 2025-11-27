import { BinCard } from "./BinCard";
import { CATEGORIES } from "./Constants";

// --- Composant: Grille de Poubelles ---
export const BinsGrid = ({
  gameState,
  onBinClick,
  userSelection,
  correctCategory,
}) => (
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {CATEGORIES.map((category) => (
      <BinCard
        key={category}
        category={category}
        onClick={onBinClick}
        isSelectable={gameState === "awaiting_selection"}
        isCorrect={userSelection === category && category === correctCategory}
        isChosen={userSelection === category}
        gameState={gameState}
      />
    ))}
  </div>
);
