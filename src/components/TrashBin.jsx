import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export const TrashBin = ({
  color,
  borderColor,
  label,
  IconComponent,
  isCorrect,
  isChosen,
  isSelectable,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  let animateState = "idle";
  if (isChosen) {
    animateState = isCorrect ? "bounce" : "shake";
  }

  const handleClick = () => {
    if (!isSelectable) return;
    onClick?.();
  };

  const getTransform = () => {
    // Priority 1: Game Result Animation
    if (animateState === "bounce") return "scale(1.1) translateY(-10px)";
    if (animateState === "shake") return "translateX(-5px) rotate(-5deg)";

    // Priority 2: Interaction Animation
    if (isHovered && isSelectable) return "scale(1.05) rotate(-2deg)";

    // Default
    return "scale(1)";
  };

  const containerStyle = {
    borderColor: isChosen ? (isCorrect ? "#22c55e" : "#ef4444") : borderColor,
    borderWidth: isChosen ? "4px" : "3px",

    // Dynamic Shadow: Green/Red glow when chosen, or Color glow when hovered
    boxShadow: isChosen
      ? `0 0 20px ${isCorrect ? "#22c55e" : "#ef4444"}`
      : isHovered && isSelectable
      ? `0 10px 25px -5px ${color}80`
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",

    transform: getTransform(),
    // We use a spring-like bezier curve for that playful "boing" feel
    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    cursor: isSelectable ? "pointer" : "default",
    opacity: isSelectable ? 1 : 0.6,
    backgroundColor: "white",
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // ➡️ CHANGED w-48 to w-40 AND h-64 to h-60 to make it smaller
      className="relative flex flex-col items-center justify-between p-3 rounded-3xl w-40 h-60 select-none"
      style={containerStyle}
    >
      {/* Header / Status Feedback */}
      <div className="h-8 w-full flex justify-center items-center absolute top-2 left-0 right-0 z-10">
        {isChosen && isCorrect && (
          <div className="bg-white rounded-full p-1 shadow-sm">
            <CheckCircle className="text-green-500 w-7 h-7 animate-bounce" />
          </div>
        )}
        {isChosen && !isCorrect && (
          <div className="bg-white rounded-full p-1 shadow-sm">
            <XCircle className="text-red-500 w-7 h-7 animate-pulse" />
          </div>
        )}
      </div>

      {/* The Character SVG */}
      {/* ➡️ CHANGED h-32 TO h-28 FOR ICON AREA */}
      <div className="flex-grow flex items-center justify-center w-full h-28 mt-4">
        {IconComponent && (
          // ➡️ CHANGED w-28 h-28 TO w-20 h-20 FOR ICON SIZE
          <div className="w-24 h-24 drop-shadow-md transition-transform duration-300">
            <IconComponent isHovered={isHovered} />
          </div>
        )}
      </div>

      {/* Label Area - Styled to look like a sticker */}
      <div
        className="w-full py-1 rounded-xl text-center mt-2 mb-1"
        style={{ backgroundColor: `${color}25` }}
      >
        <span
          className="font-bold text-base leading-tight block"
          style={{
            color: borderColor,
            fontFamily: '"Nunito", "Comic Sans MS", sans-serif',
          }}
        >
          {label}
        </span>
      </div>

      {/* "Pick Me" Badge - Only shows when hovering and valid */}
      {isHovered && isSelectable && (
        <div className="absolute w-28 text-center -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-yellow-900 border-2 border-yellow-500 px-3 py-1 rounded-full text-xs font-extrabold shadow-lg animate-bounce">
          PICK ME!
        </div>
      )}
    </div>
  );
};
