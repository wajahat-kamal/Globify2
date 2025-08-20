import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import MobileNavbar from "./Navbar/MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import LogoutPopup from "./Navbar/LogoutPopup";
import axios from "axios";
import { logout } from "../redux/authSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        dispatch(logout());
      }
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(logout());
    }
    setShowLogoutPopup(false);
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md 
      bg-gradient-to-r from-gray-900 via-blue-950 to-amber-600 
      border-b border-blue-800 shadow-lg transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group hover:scale-105 transition-transform"
          >
            <img
              src="/main-logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full border-2 border-amber-400 shadow-md group-hover:shadow-amber-400/50 transition-all"
            />
            <span className="text-2xl font-extrabold tracking-wide text-amber-400 drop-shadow-lg group-hover:text-amber-300 transition-colors">
              GLOBIFY
            </span>
          </Link>

          {/* Search - Desktop */}
          <div
            className="hidden md:flex items-center w-80
  bg-gradient-to-r from-gray-800/95 via-blue-900/95 to-gray-800/95
  rounded-full overflow-hidden border border-amber-400/40 shadow-md
  focus-within:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all duration-300"
          >
            <input
              type="text"
              name="search"
              placeholder="Search Blogs..."
              className="bg-transparent px-4 py-2 text-sm focus:outline-none 
    w-full text-gray-200 placeholder-amber-300"
            />
            <button
              className="p-2 px-3 bg-gradient-to-r from-blue-800 to-gray-900
    hover:from-amber-500 hover:to-blue-700 transition-all duration-300
    text-amber-300 hover:text-white rounded-r-full"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links - Desktop */}
        <DesktopNavbar user={user} setShowLogoutPopup={setShowLogoutPopup} />

        {/* Burger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-amber-400 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-amber-400 transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-blue-300 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Logout Popup */}
      {showLogoutPopup && (
        <LogoutPopup
          setShowLogoutPopup={setShowLogoutPopup}
          handleLogout={handleLogout}
        />
      )}

      {/* Mobile Menu */}
      <MobileNavbar toggleMenu={toggleMenu} user={user} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
