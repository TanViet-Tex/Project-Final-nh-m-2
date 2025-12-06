const sample = [
  {
    name: "Đồng hồ Epos Swiss",
    old: "14.000.000",
    new: "12.600.000",
    img: "https://i.imgur.com/9UxP8Yz.jpeg"
  },
  {
    name: "Đồng hồ Epos Swiss",
    old: "42.150.000",
    new: "37.620.000",
    img: "https://i.imgur.com/gdnV6c4.jpeg"
  },
  {
    name: "Đồng hồ Atlantic Swiss",
    old: "12.080.000",
    new: "11.184.000",
    img: "https://i.imgur.com/qyJVtCj.jpeg"
  },
  {
    name: "Đồng hồ Atlantic Swiss",
    old: "14.480.000",
    new: "12.744.000",
    img: "https://i.imgur.com/axmdSlg.jpeg"
  }
];

export default function ProductSection({ title }) {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>

      <div className="grid grid-cols-4 gap-6">
        {sample.map((p, i) => (
          <div key={i} className="bg-white p-4 shadow rounded">
            <img src={p.img} className="w-full h-64 object-cover" />
            <h3 className="mt-3 font-semibold">{p.name}</h3>

            <div className="mt-2 text-sm text-gray-500 line-through">
              Giá gốc: {p.old} đ
            </div>

            <div className="text-red-600 font-bold">
              Giá khuyến mãi: {p.new} đ
            </div>

            <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded">
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
