import { TRASH_BINS } from "./constants";
import { TrashBin } from "./trashBin";
// --- Composant: Carte de Poubelle ---
export const BinCard = ({
  category,
  onClick,
  isSelectable,
  isCorrect,
  isChosen,
  gameState,
}) => {
  const bin = TRASH_BINS[category];
  const { labelFr, color, icon } = bin;

  return (
    <div
      className={`flex flex-col items-center justify-end p-3`}
      onClick={isSelectable ? () => onClick(category) : undefined}
    >
      <TrashBin
        color={color}
        height={300}
        width={250}
        label={`${icon}${labelFr}`}
        isCorrect={isCorrect}
        isChosen={isChosen}
        gameState={gameState}
        onClick={() => {}}
      />
    </div>
  );
};
