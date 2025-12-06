export default function Register(){
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Đăng ký</h1>
      <form className="mt-4 flex flex-col gap-3">
        <input placeholder="Họ tên" className="p-2 border rounded" />
        <input placeholder="Email" className="p-2 border rounded" />
        <input placeholder="Mật khẩu" type="password" className="p-2 border rounded" />
        <button className="mt-2 bg-[var(--primary)] text-white px-4 py-2 rounded">Đăng ký</button>
      </form>
    </div>
  );
}
