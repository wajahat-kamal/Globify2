import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const {user} = useSelector(store=>store.auth);

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-10 flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.5">
            <img src="/main-logo.png" alt="logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">WK Globify</span>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center bg-gray-600 rounded-md overflow-hidden">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full"
            />
            <button className="p-2 px-3 hover:bg-gray-700 transition">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-3 text-[19px] font-medium">
          <Link to={"/"} className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-gray-300 transition">
            About
          </Link>
          <Link
            to={"/blogs"}
            className="hover:text-gray-300 transition md:mr-3"
          >
            Blogs
          </Link>

          {/* Signup/Login as buttons */}
          {user ? (
            <>
            <Link to={"/dashboard"}>
              <button className="bg-gray-700 px-3 py-2 text-[17px] rounded-md hover:bg-gray-600 transition flex justify-center items-center flex-row gap-1" >
                <picture>
                <img src="user-avatar.webp" className="w-6 h-6 rounded-full bg-white" alt="" />
                </picture>
                {/* Wajahat Kamal */}
                {}
              </button>
            </Link>
             <button className="bg-gray-700 px-4 py-2 text-[17px] rounded-md hover:bg-gray-600 transition">
             Logout
           </button>
           </>
          ) : (
            <>
              <Link to={"/signup"}>
                <button className="bg-gray-700 px-4 py-2 text-[17px] rounded-md hover:bg-gray-600 transition">
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-gray-700 px-4 py-2 text-[17px] md:mt-0 mt-2 rounded-md hover:bg-gray-600 transition">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Burger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <MobileNavbar toggleMenu={toggleMenu} user={user} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
