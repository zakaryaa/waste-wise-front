import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
export const TrashBin = ({
  color,
  label,
  icon,
  isCorrect,
  isChosen,
  isSelectable,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isSelectable) return;
    setIsOpen(false);
    setTimeout(() => setIsOpen(true), 10);
    onClick?.();
  };

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const getDarkerColor = (hex) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = 30;
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00ff) - amt);
    const B = Math.max(0, (num & 0x0000ff) - amt);
    return `rgb(${R},${G},${B})`;
  };

  const getLighterColor = (hex) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = 40;
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
    const B = Math.min(255, (num & 0x0000ff) + amt);
    return `rgb(${R},${G},${B})`;
  };

  const darkerColor = getDarkerColor(color);
  const lighterColor = getLighterColor(color);

  const binStyle = {
    cursor: isSelectable ? "pointer" : "default",
    opacity: isSelectable ? 1 : 0.7,
    transform: isChosen ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={binStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="flex flex-col items-center"
    >
      <div
        className="relative"
        style={{ width: "212px", height: "250px", perspective: "1000px" }}
      >
        <svg
          viewBox="0 0 200 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full "
          style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))" }}
        >
          <defs>
            <linearGradient
              id={`gradient-${color}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="50%" stopColor={lighterColor} stopOpacity="1" />
              <stop offset="100%" stopColor={darkerColor} stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id={`door-gradient-${color}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={lighterColor} stopOpacity="1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor={darkerColor} stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Main bin body */}
          <rect
            x="30"
            y="80"
            width="140"
            height="150"
            rx="8"
            fill={`url(#gradient-${color})`}
            stroke="#999"
            strokeWidth="1.5"
          />

          {/* Left panel shadow */}
          <rect
            x="30"
            y="80"
            width="15"
            height="150"
            rx="8"
            fill="#cccccc"
            opacity="0.3"
          />

          {/* Bottom rounded section */}
          <ellipse
            cx="100"
            cy="230"
            rx="70"
            ry="25"
            fill={color}
            stroke="#999"
            strokeWidth="1.5"
          />
          <ellipse cx="100" cy="228" rx="70" ry="22" fill={lighterColor} />

          {/* Handle on top */}
          <rect
            x="75"
            y="50"
            width="50"
            height="8"
            rx="4"
            fill="#888"
            stroke="#666"
            strokeWidth="1"
          />
          <circle cx="80" cy="54" r="3" fill="#666" />
          <circle cx="120" cy="54" r="3" fill="#666" />

          {/* Inner bin (visible behind door) */}
          <path
            d="M 45 85 L 155 85 L 150 175 L 50 175 Z"
            fill="#4a4a4a"
            opacity="0.6"
          />
          <path d="M 48 90 L 152 90 L 148 170 L 52 170 Z" fill="#333333" />

          {/* Bin door group */}
          <g
            style={{
              transformOrigin: "100px 80px",
              transition: isOpen
                ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "none",
              transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
            }}
          >
            <path
              d="M 40 80 L 160 80 Q 165 80 165 85 L 160 180 Q 160 185 155 185 L 45 185 Q 40 185 40 180 Z"
              fill={`url(#door-gradient-${color})`}
              stroke="#999"
              strokeWidth="1.5"
            />
            <rect x="90" y="120" width="20" height="8" rx="4" fill="#666" />
            <circle cx="95" cy="124" r="2" fill="#444" />
            <circle cx="105" cy="124" r="2" fill="#444" />
            <ellipse
              cx="100"
              cy="100"
              rx="35"
              ry="25"
              fill="white"
              opacity="0.2"
            />
          </g>

          {/* Highlight on bin */}
          <ellipse
            cx="100"
            cy="95"
            rx="45"
            ry="15"
            fill="white"
            opacity="0.15"
          />
        </svg>
        {/* Label text on the bin */}
        <span
          x="100"
          y="160"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="white"
          className="absolute w-full bottom-[40px] left-[-5px]"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            pointerEvents: "none",
          }}
        >
          <div className="flex justify-center items-center">
            <span className="m-2">{icon}</span> <span>{label}</span>
          </div>
        </span>
      </div>

      {isChosen && (
        <div className="text-center">
          {isCorrect ? (
            <div className="flex items-center gap-2 text-green-600 font-bold">
              <CheckCircle size={24} />
              <span>Correct!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <XCircle size={24} />
              <span>Wrong!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
