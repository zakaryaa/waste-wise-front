import { useEffect, useState } from "react";

export const TrashBin = ({
  color = "#e8e8e8",
  height = 300,
  width = 250,
  label = "Trash",
  isCorrect = false,
  isChosen = false,
  gameState,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isCorrect, isChosen, gameState);
  }, [isCorrect, isChosen, gameState]);

  const handleClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
    onClick?.();
  };

  // Calculate dynamic colors based on the primary color
  const getDarkerColor = (hex) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = 30;
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;
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

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        style={{
          perspective: "1000px",
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <svg
          viewBox="0 0 200 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))" }}
        >
          <defs>
            <linearGradient id="binGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="50%" stopColor={lighterColor} stopOpacity="1" />
              <stop offset="100%" stopColor={darkerColor} stopOpacity="1" />
            </linearGradient>
            <linearGradient id="doorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            fill="url(#binGradient)"
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
            {/* Door shape */}
            <path
              d="M 40 80 L 160 80 Q 165 80 165 85 L 160 180 Q 160 185 155 185 L 45 185 Q 40 185 40 180 Z"
              fill="url(#doorGradient)"
              stroke="#999"
              strokeWidth="1.5"
            />

            {/* Door handle */}
            <rect x="90" y="120" width="20" height="8" rx="4" fill="#666" />
            <circle cx="95" cy="124" r="2" fill="#444" />
            <circle cx="105" cy="124" r="2" fill="#444" />

            {/* Door highlight */}
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
      </div>

      {label && <p className="text-lg font-semibold">{label}</p>}

      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        className="px-6 py-2 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
      >
        Open Bin
      </button>
    </div>
  );
};

//  <TrashBin
//           color="#e8e8e8"
//           height={300}
//           width={250}
//           label="General Waste"
//           onClick={() => handleBinOpen('General Waste')}
//         />
