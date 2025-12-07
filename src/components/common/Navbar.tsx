import { Link } from "react-router-dom";
// Giả định bạn đã cài đặt thư viện icons, ví dụ: lucide-react
import { Search, ShoppingCart } from 'lucide-react'; 

export default function Navbar() {
  return (
    // Navbar: Fixed, nền trắng mờ (bg-white/90), shadow nhẹ
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 1. Logo */}
        {/* Sử dụng màu Vàng đồng (amber-500) làm màu chủ đạo */}
        <Link to="/" className="text-2xl font-bold text-amber-600 hover:text-amber-800 transition">
          MyStore
        </Link>

        {/* 2. Ô Tìm Kiếm Hiện Đại (Chỉ hiển thị trên Desktop) */}
        <div className="hidden lg:flex items-center w-96 relative">
          <input
            type="text"
            placeholder="Tìm kiếm đồng hồ..."
            // Thiết kế hiện đại: py-2, bo tròn, viền mỏng, border-amber khi focus
            className="w-full py-2 pl-4 pr-10 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition duration-200"
          />
          <Search className="absolute right-3 h-5 w-5 text-gray-400" />
        </div>

        {/* 3. Menu & Actions */}
        <div className="flex items-center gap-6 text-lg font-medium">

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Màu chữ mặc định: text-gray-700. Hover: Màu chủ đạo (amber-600) */}
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition">Trang chủ</Link>
            <Link to="/products" className="text-gray-700 hover:text-amber-600 transition">Sản phẩm</Link>
          </div>

          {/* Giỏ hàng & Login */}
          <div className="flex items-center gap-4">
            
            {/* Giỏ Hàng (Cart Icon) */}
            <Link to="/cart" className="text-gray-700 hover:text-amber-600 transition relative">
                <ShoppingCart className="h-6 w-6" />
                {/* Badge đếm số lượng (Ví dụ: 3 sản phẩm) */}
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              // Nút hiện đại: Viền vàng đồng, hover nền vàng đồng
              className="px-4 py-2 rounded-full border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold transition duration-300 shadow-md"
            >
              Đăng nhập
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}