export default function ApparelPage() {
  return (
    <main className="pt-20 pb-20">
      <div className="container-custom">
        {/* Back Link */}
        <a
          href="/"
          className="inline-block text-sm text-gray-500 hover:text-gray-700 mb-12 transition-colors"
        >
          ← Back to Home
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-auto">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
              Apparel
            </h1>

            <div className="space-y-6 max-w-xl">
              <p className="text-lg text-gray-600 leading-relaxed">
                Premium pieces that celebrate artisanal craftsmanship and timeless design.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Ethically made, thoughtfully designed.
              </p>

              <div className="pt-8">
                <p className="text-2xl font-serif font-semibold text-gray-900">
                  Coming Soon.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-96 lg:h-full lg:min-h-screen">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="/branding/Apparel.png"
                alt="Premium apparel collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
