import bannerImg from "../assets/Banner.jpg";

export default function Banner() {
  return (
    <div className="w-full">
      <div className="w-full flex">
        {/* LEFT BLOCK */}
        <div className="w-1/2 bg-gradient-to-r from-yellow-200 to-yellow-300 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800">GIÁ SỐC CUỐI TUẦN</h2>
          <p className="text-gray-700 mt-2">Giảm đến <span className="font-bold">30%</span></p>
          <button className="bg-white text-gray-800 px-4 py-2 rounded mt-4 border">
            Xem chi tiết
          </button>
        </div>

        {/* RIGHT BANNER IMAGE */}
        <div className="w-1/2">
          <img src={bannerImg} alt="banner" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
