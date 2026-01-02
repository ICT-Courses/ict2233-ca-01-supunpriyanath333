import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Info,
  Phone,
  Menu,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const link = "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1";
  const active = "bg-blue-600 text-white";
  const inactive = "text-gray-700 hover:text-blue-700 hover:bg-gray-100";

  return (
    <nav className="bg-gray-100 border-b shadow-sm w-full">
      <div className="container mx-auto flex justify-between items-center px-1 py-2">

        {/* LEFT: LOGO + NAME */}
<div className="flex items-center gap-3 h-12">

  {/* Container */}
  <div className="h-18 w-18 flex-shrink-0">
    <img
      src="/images/logo.png"
      alt="Logo"
      className="h-18 w-18 object-contain"
    />
  </div>

  <div className="leading-tight">
    <h1 className="text-blue-700 font-bold text-xl">GRANTHA</h1>
    <p className="text-gray-600 text-xs -mt-1">Sinhala Book Library</p>
  </div>
</div>

        {/* MENU */}
        <div className="hidden md:flex space-x-2 items-center">

          <NavLink
            to="/"
            className={({ isActive }) => `${link} ${isActive ? active : inactive}`}
          >
            <Home size={16} /> Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) => `${link} ${isActive ? active : inactive}`}
          >
            <BookOpen size={16} /> Books
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `${link} ${isActive ? active : inactive}`}
          >
            <Info size={16} /> About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `${link} ${isActive ? active : inactive}`}
          >
            <Phone size={16} /> Contact
          </NavLink>

          {/* SEARCH BAR */}
          <div className="flex items-center bg-white rounded-full px-3 py-1 w-56 shadow-sm">
            <Search size={16} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search books..."
              className="ml-2 text-sm bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* MOBILE MENU*/}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu size={26} className="text-gray-800" />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-gray-200 px-4 pb-4 space-y-2">

          <div className="my-2">
            <div className="flex items-center bg-white rounded-md px-3 py-2 shadow-sm">
              <Search size={16} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search books..."
                className="ml-2 text-sm bg-transparent outline-none w-full"
              />
            </div>
          </div>

          <NavLink
            to="/"
            className={({ isActive }) => `${link} block ${isActive ? active : inactive}`}
          >
            <Home size={16} /> Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              `${link} block ${isActive ? active : inactive}`
            }
          >
            <BookOpen size={16} /> Books
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${link} block ${isActive ? active : inactive}`
            }
          >
            <Info size={16} /> About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${link} block ${isActive ? active : inactive}`
            }
          >
            <Phone size={16} /> Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
