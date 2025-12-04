import { TRASH_BINS } from "../Utils";
import { TrashBin } from "./TrashBin";

// --- Component: Bin Card Wrapper ---
export const BinCard = ({
  category,
  onClick,
  isSelectable,
  isCorrect,
  isChosen,
}) => {
  const binData = TRASH_BINS[category];

  return (
    <div className="p-2 flex justify-center">
      <TrashBin
        color={binData.color}
        borderColor={binData.borderColor}
        label={binData.label}
        IconComponent={binData.IconComponent}
        isCorrect={isCorrect}
        isChosen={isChosen}
        isSelectable={isSelectable}
        onClick={() => onClick(category)}
      />
    </div>
  );
};
