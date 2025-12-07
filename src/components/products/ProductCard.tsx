// src/components/products/ProductCard.tsx

import React from 'react';

// Giả định kiểu dữ liệu Product đã được định nghĩa trong src/types/product.ts
// và đã được bổ sung trường imageUrl (ProductWithImage)
interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number; // Giá gốc (nếu có giảm giá)
  imageUrl: string; // Ảnh sản phẩm từ Unsplash API
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Hàm tính phần trăm giảm giá (nếu có)
  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    // Card hiện đại, có hiệu ứng hover nhẹ
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      
      {/* Khối Hình ảnh */}
      <a href={`/product/${product.id}`} className="block relative overflow-hidden">
        
        {/* Ảnh từ API Unsplash */}
        <img
          src={product.imageUrl} 
          alt={product.name}
          // Thiết lập kích thước cố định và hiệu ứng zoom khi hover
          className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110" 
          loading="lazy"
          // Placeholder nếu ảnh không load được
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = '/default-watch-placeholder.svg'; // Dùng ảnh placeholder cục bộ
          }}
        />
        
        {/* Tag giảm giá */}
        {discountPercentage > 0 && (
            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                GIẢM {discountPercentage}%
            </span>
        )}
      </a>

      {/* Khối Thông tin */}
      <div className="p-4 text-center">
        <p className="text-xs text-gray-500 uppercase font-semibold">{product.brand}</p>
        
        {/* Tên sản phẩm */}
        <a href={`/product/${product.id}`} className="text-lg font-bold text-gray-800 hover:text-yellow-600 transition-colors duration-200 mt-1 block">
          {product.name}
        </a>
        
        {/* Giá */}
        <div className="mt-2 flex justify-center items-center">
          {/* Giá mới */}
          <span className="text-xl font-extrabold text-red-600">
             {product.price.toLocaleString('vi-VN')} VNĐ
          </span>
          
          {/* Giá gốc (nếu có) */}
          {product.oldPrice && (
            <span className="ml-3 text-sm text-gray-400 line-through">
                {product.oldPrice.toLocaleString('vi-VN')} VNĐ
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;