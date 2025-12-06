import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <header className="w-full py-4 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          WatchStore
        </Link>

        <nav className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <Link to="/cart" className="hover:text-primary">Cart</Link>
          <Link to="/login" className="hover:text-primary">Login</Link>
        </nav>
      </div>
    </header>
  );
}
