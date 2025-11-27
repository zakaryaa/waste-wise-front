// --- Composant: Texte de Statut ---
export const StatusText = ({ gameState }) => {
  const messages = {
    ready: "Cliquez pour commencer et téléchargez une image d'un déchet.",
    classifying: "Classification en cours...",
    awaiting_selection: "Où doit aller cet article ? Faites votre choix !",
    result_displayed: "Résultat du jeu",
    error: "Une erreur est survenue pendant la classification.",
  };
  return (
    <p className="text-center text-gray-500 mb-8">{messages[gameState]}</p>
  );
};
