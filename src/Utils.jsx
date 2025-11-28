// Utils
// eslint-disable-next-line react-refresh/only-export-components
export const TRASH_BINS = {
  ORGANIC: { color: "#22c55e", labelEn: "Organic", icon: "🌿" },
  RECYCLABLE: { color: "#3b82f6", labelEn: "Recyclable", icon: "♻️" },
  GLASS: { color: "#84cc16", labelEn: "Glass", icon: "🍸" },
  PAPER: { color: "#eab308", labelEn: "Paper", icon: "📰" },
  PLASTIC: { color: "#ef4444", labelEn: "Plastic", icon: "📦" },
  METAL: { color: "#64748b", labelEn: "Metal", icon: "🔨" },
};

export const CATEGORIES = Object.keys(TRASH_BINS);
//export const API_ENDPOINT =
 // "https://api-image-docker-224506120950.europe-west1.run.app/detect";

  export const API_ENDPOINT = "http://127.0.0.1:8000/detect";
