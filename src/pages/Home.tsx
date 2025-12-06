import Banner from "../components/Banner";
import Brands from "../components/Brands";
import ProductSection from "../components/ProductSection";

export default function Home(){
  return (
    <div>
      <Banner />
      <Brands />
      <ProductSection title="ĐỒNG HỒ ĐANG GIẢM GIÁ" />
      <ProductSection title="ĐỒNG HỒ EPOS SWISS" />
    </div>
  );
}
