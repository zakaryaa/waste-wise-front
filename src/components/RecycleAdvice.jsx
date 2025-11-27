// --- Composant: Conseil de Recyclage ---
export const RecyclingAdvice = ({ advice }) => (
  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300 mt-4">
    <h4 className="font-semibold text-gray-700 mb-2">Conseil de Recyclage :</h4>
    <p className="text-sm text-gray-600">
      {advice || "Aucun conseil de recyclage n'a été trouvé pour cet article."}
    </p>
  </div>
);
