// src/components/products/ProductFilter.tsx

import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const brands = ['Rolex', 'Atlantic', 'Epos', 'Diamond D', 'Orient', 'Seiko'];
const priceRanges = [
  { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
  { label: '5 triệu - 10 triệu', min: 5000000, max: 10000000 },
  { label: 'Trên 10 triệu', min: 10000000, max: Infinity },
];
const genders = ['Nam', 'Nữ', 'Unisex'];

const ProductFilter: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Bộ Lọc</h3>
      
      {/* Tìm kiếm nhanh */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tìm kiếm</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Nhập tên sản phẩm..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
          />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Lọc theo Thương hiệu */}
      <div className="mb-6 border-b pb-4">
        <h4 className="text-md font-semibold text-gray-800 flex justify-between items-center cursor-pointer">
            Thương hiệu <ChevronDown size={16} />
        </h4>
        <div className="mt-2 space-y-2">
          {brands.map(brand => (
            <div key={brand} className="flex items-center">
              <input id={`brand-${brand}`} type="checkbox" className="h-4 w-4 text-yellow-600 border-gray-300 rounded" />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-600">{brand}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Lọc theo Giá */}
      <div className="mb-6 border-b pb-4">
        <h4 className="text-md font-semibold text-gray-800 flex justify-between items-center cursor-pointer">
            Khoảng Giá <ChevronDown size={16} />
        </h4>
        <div className="mt-2 space-y-2">
          {priceRanges.map((range, index) => (
            <div key={index} className="flex items-center">
              <input id={`price-${index}`} name="price-range" type="radio" className="h-4 w-4 text-yellow-600 border-gray-300" />
              <label htmlFor={`price-${index}`} className="ml-2 text-sm text-gray-600">{range.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Lọc theo Giới tính */}
      <div className="mb-2">
        <h4 className="text-md font-semibold text-gray-800 flex justify-between items-center cursor-pointer">
            Giới tính <ChevronDown size={16} />
        </h4>
        <div className="mt-2 space-y-2">
          {genders.map(gender => (
            <div key={gender} className="flex items-center">
              <input id={`gender-${gender}`} type="checkbox" className="h-4 w-4 text-yellow-600 border-gray-300 rounded" />
              <label htmlFor={`gender-${gender}`} className="ml-2 text-sm text-gray-600">{gender}</label>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductFilter;