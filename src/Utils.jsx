export const MetalMachineSVG = ({ isHovered = false }) => {
  // FIX: Using translateY to lift the entire lid group straight up.
  const lidTransform = isHovered ? "translateY(-7px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Group for the main bin body parts */}
      <rect x="25" y="20" width="50" height="70" rx="10" fill="#B0BEC5" />{" "}
      {/* Gray Body */}
      <circle
        cx="50"
        cy="55"
        r="15"
        fill="white"
        stroke="#78909C"
        strokeWidth="2"
      />{" "}
      {/* Can Icon */}
      <path
        d="M 40 75 C 45 70, 55 70, 60 75"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />{" "}
      {/* Robot Smile */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.4s ease-out",
        }}
      >
        <path
          d="M 30 20 L 70 20 C 75 15, 65 5, 50 5 L 50 5 C 35 5, 25 15, 30 20 Z"
          fill="#90A4AE"
        />{" "}
        {/* Curved Top (The Lid) */}
        <path
          d="M 40 40 C 45 35, 55 35, 60 40 L 55 45 C 50 50, 45 50, 40 45 Z"
          fill="#78909C"
        />{" "}
        {/* Simple Mouth/Lid Detail (Moves with the lid) */}
      </g>
      {/* The main bin body remains visible */}
    </svg>
  );
};
export const CompostKingSVG = ({ isHovered = false }) => {
  // The rectangle lid handle is the part we'll move
  const lidTransform = isHovered ? "translateY(-10px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="60" height="60" rx="15" fill="#8D6E63" />{" "}
      {/* Brown Body */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.3s ease-out",
        }}
      >
        <rect x="25" y="20" width="50" height="10" rx="5" fill="#6D4C41" />{" "}
        {/* Lid Handle (Moves up) */}
      </g>
      {/* Internal/Front Details (Static) */}
      <path
        d="M 30 40 C 35 35, 65 35, 70 40 L 65 50 C 60 55, 40 55, 35 50 Z"
        fill="#D7CCC8"
      />{" "}
      {/* Bone/Peel Icon */}
      <circle cx="50" cy="70" r="10" fill="#66BB6A" /> {/* Green Leaf Detail */}
      <path
        d="M 50 70 L 60 65"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 40 50 C 45 45, 55 45, 60 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />{" "}
      {/* Happy Mouth */}
    </svg>
  );
};
export const TossTimerSVG = ({ isHovered = false }) => {
  const lidTransform = isHovered ? "translateY(-10px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="70" height="65" rx="15" fill="#E53935" />{" "}
      {/* Red Body */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.3s ease-out",
        }}
      >
        <rect x="30" y="15" width="40" height="10" rx="5" fill="#C62828" />{" "}
        {/* Lid Handle (Moves up) */}
      </g>
      {/* Internal/Front Details (Static) */}
      <path
        d="M 35 45 L 65 75 M 65 45 L 35 75"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />{" "}
      {/* X (Non-recyclable) Mark */}
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="white"
        strokeWidth="5"
      />{" "}
      {/* Circle around the X */}
      <path
        d="M 40 35 C 45 30, 55 30, 60 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />{" "}
      {/* Neutral/Stern Mouth */}
    </svg>
  );
};
export const PaperPalSVG = ({ isHovered = false }) => {
  const lidTransform = isHovered ? "translateY(-10px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="70" height="70" rx="15" fill="#4B9AFF" />{" "}
      {/* Blue Body */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.3s ease-out",
        }}
      >
        <rect x="25" y="15" width="50" height="10" rx="5" fill="#2B7AFF" />{" "}
        {/* Lid Handle (Moves up) */}
      </g>
      {/* Internal/Front Details (Static) */}
      <path
        d="M 35 45 C 40 40, 60 40, 65 45 L 60 55 C 55 60, 45 60, 40 55 Z"
        fill="white"
      />{" "}
      {/* Paper Icon */}
      <circle cx="40" cy="80" r="3" fill="#2B7AFF" /> {/* Left Foot/Wheel */}
      <circle cx="60" cy="80" r="3" fill="#2B7AFF" /> {/* Right Foot/Wheel */}
      <path
        d="M 40 35 C 45 30, 55 30, 60 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />{" "}
      {/* Happy Mouth */}
    </svg>
  );
};
export const PlasticProtectorSVG = ({ isHovered = false }) => {
  // FIX: Using translateY to lift the entire lid group straight up.
  // We'll lift it up by 10 pixels (the height of the small handles on other bins).
  const lidTransform = isHovered ? "translateY(-10px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="25" width="60" height="70" rx="10" fill="#FFA726" />{" "}
      {/* Orange Body */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.4s ease-out",
        }}
      >
        <path
          d="M 30 25 L 70 25 C 75 20, 65 10, 50 10 L 50 10 C 35 10, 25 20, 30 25 Z"
          fill="#FFB74D"
        />{" "}
        {/* Curved Top/Lid */}
        <path
          d="M 40 35 C 45 30, 55 30, 60 35"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />{" "}
        {/* Neutral Mouth (Moves with lid) */}
      </g>
      {/* Internal/Front Details (Static) */}
      {/* Simplified Recycling Triangle Icon (White) */}
      <path
        d="M 40 55 L 60 55 L 50 40 L 40 55 Z"
        fill="white"
        transform="translate(0, 5) rotate(180, 50, 50)"
      />
      <path
        d="M 40 55 L 60 55 L 50 40 L 40 55 Z"
        fill="white"
        transform="translate(10, 10) rotate(-60, 50, 50)"
      />
      <path
        d="M 40 55 L 60 55 L 50 40 L 40 55 Z"
        fill="white"
        transform="translate(-10, 10) rotate(60, 50, 50)"
      />
    </svg>
  );
};
export const GlassGuardianSVG = ({ isHovered = false }) => {
  const lidTransform = isHovered ? "translateY(-10px)" : "translateY(0)";

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="25" width="60" height="70" rx="10" fill="#66BB6A" />{" "}
      {/* Green Body */}
      {/* --- LID GROUP --- */}
      <g
        style={{
          transform: lidTransform,
          transition: "transform 0.3s ease-out",
        }}
      >
        <rect x="30" y="15" width="40" height="10" rx="5" fill="#4CAF50" />{" "}
        {/* Lid Handle (Moves up) */}
      </g>
      {/* Internal/Front Details (Static) */}
      {/* Bottle/Glass Icon (White) */}
      <path
        d="M 45 65 L 55 65 L 55 50 L 58 45 L 58 35 L 42 35 L 42 45 L 45 50 Z"
        fill="white"
      />
      <circle cx="50" cy="32" r="3" fill="white" /> {/* Bottle Top */}
      <path
        d="M 40 35 C 45 30, 55 30, 60 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />{" "}
      {/* Neutral Mouth */}
    </svg>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const TRASH_BINS = {
  PAPER: {
    color: "#4B9AFF", // Blue
    borderColor: "#2B7AFF",
    label: "Paper Pal",
    description: "Newspapers & Boxes",
    IconComponent: PaperPalSVG,
  },
  METAL: {
    color: "#90A4AE", // Gray/Silver
    borderColor: "#546E7A",
    label: "Metal Machine",
    description: "Cans & Foil",
    IconComponent: MetalMachineSVG,
  },
  PLASTIC: {
    color: "#FFA726", // Orange/Yellow
    borderColor: "#F57C00",
    label: "Plastic Protector",
    description: "Bottles & Jugs",
    IconComponent: PlasticProtectorSVG,
  },
  GLASS: {
    color: "#66BB6A", // Green
    borderColor: "#388E3C",
    label: "Glass Guardian",
    description: "Jars & Bottles",
    IconComponent: GlassGuardianSVG,
  },
  ORGANIC: {
    color: "#8D6E63", // Brown
    borderColor: "#5D4037",
    label: "Compost King",
    description: "Food Scraps",
    IconComponent: CompostKingSVG,
  },
  TRASH: {
    color: "#E53935", // Red
    borderColor: "#C62828",
    label: "Trash Hero",
    description: "General Waste",
    IconComponent: TossTimerSVG,
  },
};

export const CATEGORIES = Object.keys(TRASH_BINS);
export const API_ENDPOINT =
  "https://api-image-docker-224506120950.europe-west1.run.app/detect";
