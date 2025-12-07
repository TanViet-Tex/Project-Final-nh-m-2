// src/routes/index.tsx

import React from 'react';
// Import các component Home đã tạo trong thư mục components/home/
import Banner from '../components/home/Banner'; 
import BrandSection from '../components/home/BrandSection';
import ProductSection from '../components/home/ProductSection';
// Import hook lấy dữ liệu sản phẩm và gán ảnh Unsplash
import { useProducts } from '../hooks/useProducts'; 
// Import Spinner nếu bạn muốn hiển thị loading
import Spinner from '../components/common/Spinner'; 

const HomeRoute: React.FC = () => {
  // 1. Gọi Hook để lấy dữ liệu sản phẩm và trạng thái tải
  const { products, loading, error } = useProducts(); 
  
  if (loading) {
    // Hiển thị Spinner khi đang tải
    return (
      <div className="flex justify-center items-center min-h-screen pt-16">
        <Spinner /> 
      </div>
    );
  }

  if (error) {
    // Hiển thị thông báo lỗi nếu không lấy được dữ liệu
    return (
      <div className="text-center text-red-500 py-20">
        Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.
      </div>
    );
  }

  return (
    <div className="home-page pt-16 md:pt-20 bg-gray-50">
      
      {/* 1. Banner Quảng cáo */}
      <Banner />

      {/* 2. Danh sách Thương hiệu */}
      <BrandSection />

      {/* 3. Section Sản phẩm đang giảm giá */}
      <ProductSection 
        title="ĐỒNG HỒ ĐANG GIẢM GIÁ" 
        products={products.slice(0, 8)} // Chỉ hiển thị 8 sản phẩm đầu
      />

      {/* Có thể thêm các section khác tại đây, ví dụ: */}
      <ProductSection 
        title="BỘ SƯU TẬP MỚI" 
        products={products.slice(8, 12)} // 4 sản phẩm tiếp theo
      />
      
    </div>
  );
};

export default HomeRoute;