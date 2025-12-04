// --- Composant: Texte de Statut ---
export const StatusText = ({ gameState }) => {
  const messages = {
    ready: "Click to start and upload an image of a piece of trash.",
    classifying: "Classification in progress...",
    awaiting_selection: "Where should this item go? Make your choice!",
    result_displayed: "Game result",
    error: "An error occurred during classification.",
  };
  return (
    <p className="text-center text-gray-500 mb-8">{messages[gameState]}</p>
  );
};
