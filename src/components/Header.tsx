export default function Header() {
  return (
    <header className="bg-[#4b187f] text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-3xl font-bold">AllWatch</h1>

        <div className="flex items-center w-1/3">
          <input
            className="w-full p-2 rounded-l bg-white text-black"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button className="px-4 py-2 bg-black text-white rounded-r">
            Tìm kiếm
          </button>
        </div>

        <nav className="flex gap-6 text-sm">
          <span>Giỏ hàng(2)</span>
          <span>Hệ thống cửa hàng</span>
          <span>Nguyễn Văn A</span>
          <span>Đăng xuất</span>
        </nav>
      </div>

      <nav className="bg-[#5a1d96] text-white">
        <div className="container mx-auto flex gap-10 py-3">
          <button>📋 Danh mục sản phẩm</button>
          <a href="#">ĐỒNG HỒ</a>
          <a href="#">PHỤ KIỆN ĐỒNG HỒ</a>
          <a href="#">KHUYẾN MÃI</a>
          <button className="ml-auto bg-yellow-400 px-3 py-1 rounded">
            TRẢ GÓP 0%
          </button>
          <span>TIN TỨC</span>
        </div>
      </nav>
    </header>
  );
}
