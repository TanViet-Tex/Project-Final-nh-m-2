import ProductCard from "./ProductCard";

const sample = [
  { title: "Đồng hồ Epos Swiss", priceOld: "14.000.000", priceNew: "12.600.000", img: "https://i.imgur.com/9UxP8Yz.jpeg" },
  { title: "Đồng hồ Epos Swiss", priceOld: "39.600.000", priceNew: "37.620.000", img: "https://i.imgur.com/gdnV6c4.jpeg" },
  { title: "Đồng hồ Atlantic Swiss", priceOld: "13.980.000", priceNew: "11.184.000", img: "https://i.imgur.com/qyJVtCj.jpeg" },
  { title: "Đồng hồ Atlantic Swiss", priceOld: "14.160.000", priceNew: "12.744.000", img: "https://i.imgur.com/axmdSlg.jpeg" },
];

export default function ProductSection({ title }:{ title:string }) {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sample.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  );
}
