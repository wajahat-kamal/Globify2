import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileNavbar from "./Navbar/MobileNavbar";
import { useSelector } from "react-redux";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import LogoutPopup from "./Navbar/LogoutPopup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 z-50 w-full backdrop-blur-md 
      bg-gradient-to-r from-blue-950 to-gray-950  
      border-b border-amber-500/20 shadow-lg" 
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group hover:scale-[1.03] transition-transform"
          >
            <img
              src="/main-logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full border border-amber-400 shadow-md group-hover:shadow-amber-400/50 transition-all"
            />
            <span className="text-2xl font-bold tracking-wide text-amber-400 drop-shadow-sm group-hover:text-amber-300 transition-colors">
              GLOBIFY
            </span>
          </Link>
        </div>

        {/* Links - Desktop */}
        <DesktopNavbar user={user} setShowLogoutPopup={setShowLogoutPopup} />

        {/* Burger - Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 hover:text-amber-400 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Logout Popup */}
      {showLogoutPopup && (
        <LogoutPopup setShowLogoutPopup={setShowLogoutPopup} />
      )}

      {/* Mobile Menu */}
      <MobileNavbar toggleMenu={toggleMenu} user={user} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
