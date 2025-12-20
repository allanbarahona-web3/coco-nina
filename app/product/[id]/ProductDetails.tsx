'use client';

interface ProductDetailsProps {
  materials: string[];
  techniques: string[];
}

export default function ProductDetails({
  materials,
  techniques,
}: ProductDetailsProps) {
  return (
    <div className="space-y-8 py-12 border-t border-gray-200">
      {/* Materials */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Materials
        </h3>
        <div className="flex flex-wrap gap-2">
          {materials.map((material) => (
            <span
              key={material}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {material}
            </span>
          ))}
        </div>
      </div>

      {/* Techniques */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
          Crafting Techniques
        </h3>
        <div className="flex flex-wrap gap-2">
          {techniques.map((technique) => (
            <span
              key={technique}
              className="px-4 py-2 bg-amber-50 text-amber-900 text-sm rounded-full"
            >
              {technique}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
