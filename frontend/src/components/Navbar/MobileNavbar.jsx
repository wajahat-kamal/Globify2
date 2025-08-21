import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  FileText,
  MessageSquare,
  PencilLine,
  Search,
  ChevronDown,
  LogOut,
} from "lucide-react";
import LogoutPopup from "./LogoutPopup";

function MobileNavbar({ toggleMenu, user, isOpen }) {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`md:hidden bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 
      px-4 text-[17px] pb-6 space-y-3 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      fixed top-16 right-0 w-3/4 h-screen overflow-y-auto z-40 border-l border-amber-400/40 backdrop-blur-md`}
    >
      {/* Static Links */}
      <Link
        to="/"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-amber-400 hover:bg-white/5 transition-all duration-300"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-amber-400 hover:bg-white/5 transition-all duration-300"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-amber-400 hover:bg-white/5 transition-all duration-300"
        onClick={toggleMenu}
      >
        Blogs
      </Link>

      {user ? (
        <>
          {/* Dropdown with Click Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-gradient-to-r from-gray-800/80 to-blue-900/80 px-3 py-2 text-[17px] rounded-lg 
              hover:from-gray-700 hover:to-blue-800 transition-all duration-300 flex justify-center items-center gap-2 
              border border-amber-400/40 shadow-md"
            >
              <img
                src="/user-avatar.png"
                className="w-7 h-7 rounded-full bg-white border border-amber-400/40"
                alt="User Avatar"
              />
              <span className="truncate text-white font-medium">
                {user?.firstName} {user?.lastName}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 text-amber-400 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="mt-3 w-full bg-gradient-to-b from-gray-800/95 to-blue-900/95 text-white rounded-xl shadow-lg py-2 
              animate-fadeIn border border-amber-400/30 backdrop-blur-sm"
              >
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  <User size={18} className="text-amber-400" />
                  <span className="font-medium">Profile</span>
                </Link>

                <Link
                  to="/dashboard/your-blogs"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  <FileText size={18} className="text-blue-300" />
                  <span className="font-medium">Your Blogs</span>
                </Link>

                <Link
                  to="/dashboard/comments"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  <MessageSquare size={18} className="text-amber-400" />
                  <span className="font-medium">Comments</span>
                </Link>

                <Link
                  to="/dashboard/write-blog"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-all duration-300"
                  onClick={toggleMenu}
                >
                  <PencilLine size={18} className="text-blue-300" />
                  <span className="font-medium">Write Blog</span>
                </Link>

                <div className="border-t border-amber-400/30 my-2"></div>

                <button
                  onClick={() => setShowLogoutPopup(true)}
                  className="flex items-center gap-3 w-full px-4 py-2 text-red-300 hover:bg-red-600/20 hover:text-red-200 
                  rounded-lg transition-all duration-300"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link to="/signup">
            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2 text-[16px] rounded-lg text-gray-900 font-medium shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 border border-amber-400">
              Signup
            </button>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 mt-2 rounded-lg text-white font-medium shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 border border-blue-400">
              Login
            </button>
          </Link>
        </>
      )}

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div>
          <LogoutPopup setShowLogoutPopup={setShowLogoutPopup} />
        </div>
      )}

      {/* Search */}
      <div
        className="flex items-center gap-2 mt-4 
        bg-gradient-to-r from-gray-800/95 via-blue-900/95 to-gray-800/95
        rounded-full overflow-hidden border border-amber-400/40 shadow-md 
        focus-within:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all duration-300"
      >
        <input
          type="text"
          placeholder="Search Blogs..."
          className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full text-gray-200 placeholder-amber-300"
        />
        <button className="p-2 px-3 bg-gradient-to-r from-blue-800 to-gray-900 hover:from-amber-500 hover:to-blue-700 transition-all duration-300 text-amber-300 hover:text-white rounded-r-full">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
