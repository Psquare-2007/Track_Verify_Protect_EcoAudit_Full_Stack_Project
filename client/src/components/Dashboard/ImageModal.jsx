import { X } from "lucide-react";

export default function ImageModal({
  image,
  onClose,
}) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 bg-white hover:bg-red-500 hover:text-white transition rounded-full p-3 shadow-xl"
        >
          <X size={24} />
        </button>

        {/* Image */}

        <img
          src={image}
          alt="Waste"
          className="w-full max-h-[85vh] object-contain rounded-3xl shadow-2xl bg-white"
        />
      </div>
    </div>
  );
}