import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-gray-900">Watch Store</h1>
      <p className="mt-2 text-gray-600">Trang chủ bán đồng hồ cao cấp</p>

      {/* Banner */}
      <div className="mt-10 w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-3xl font-semibold text-gray-700">
        Banner / Slider
      </div>

      {/* Sản phẩm nổi bật */}
      <h2 className="text-3xl font-bold mt-16 mb-6">Sản phẩm nổi bật</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <h3 className="font-semibold mt-3">Luxury Watch {i}</h3>
            <p className="text-primary font-bold mt-1">$199</p>
          </div>
        ))}
      </div>
    </div>
  );
}
