import { TRASH_BINS } from "../Utils";
import { TrashBin } from "./TrashBin";
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

  const { labelEn, color, icon } = bin;

  return (
    <div
      className={`flex flex-col items-center justify-end p-3`}
      onClick={isSelectable ? () => onClick(category) : undefined}
      key={category}
    >
      <TrashBin
        color={color}
        height={300}
        width={250}
        label={labelEn}
        icon={icon}
        isCorrect={isCorrect}
        isChosen={isChosen}
        gameState={gameState}
        onClick={() => {}}
      />
    </div>
  );
};
