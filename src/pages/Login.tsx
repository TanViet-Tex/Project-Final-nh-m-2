export default function Login(){
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Đăng nhập</h1>
      <form className="mt-4 flex flex-col gap-3">
        <input placeholder="Email/Username" className="p-2 border rounded" />
        <input placeholder="Mật khẩu" type="password" className="p-2 border rounded" />
        <button className="mt-2 bg-[var(--primary)] text-white px-4 py-2 rounded">Đăng nhập</button>
      </form>
    </div>
  );
}
