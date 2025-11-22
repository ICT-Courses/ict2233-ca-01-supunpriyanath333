import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "bg-blue-600 text-white";
  const inactive = "text-gray-700 hover:text-blue-700 hover:bg-gray-100";

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-blue-600 font-semibold text-lg">Sinhala Library</h1>
        <div className="flex space-x-2">
          <NavLink to="/" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>Home</NavLink>
          <NavLink to="/books" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>Books</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${link} ${isActive ? active : inactive}`}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
