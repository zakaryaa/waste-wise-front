import { ClassificationStatus } from "./ClassificationStatus"; // --- Composant: Aperçu et Chargement ---
export const ImagePreviewSection = ({ imagePreviewUrl, isClassifying }) => (
  <div className="mb-8">
    {imagePreviewUrl && (
      <div className="mb-6 flex justify-center">
        <img
          src={imagePreviewUrl}
          alt="Article à classifier"
          className="w-full max-w-xs h-auto rounded-xl shadow-lg border-4 border-gray-200 object-cover"
        />
      </div>
    )}
    {isClassifying && <ClassificationStatus isClassifying={isClassifying} />}
  </div>
);
