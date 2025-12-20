'use client';

export default function ProductCare() {
  const careInstructions = [
    'Avoid moisture and harsh chemicals',
    'Store in a cool, dry place',
    'Clean gently with a soft, dry cloth',
    'Keep away from extreme temperatures',
  ];

  return (
    <div className="py-12 border-t border-gray-200">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Care Instructions
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          {careInstructions.map((instruction, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-gray-400 flex-shrink-0 mt-1">•</span>
              <span>{instruction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
