import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  FileText,
  MessageSquare,
  PencilLine,
  ChevronDown,
  LogOut,
  Home,
  Info,
  BookOpen,
} from "lucide-react";
import LogoutPopup from "./LogoutPopup";

function MobileNavbar({ toggleMenu, user, isOpen }) {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`md:hidden fixed top-16 right-0 w-3/4 h-screen z-40
      bg-gradient-to-r from-blue-950 to-gray-950
      border-l border-amber-400/20 backdrop-blur-lg
      px-6 py-6 space-y-5 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* General Links */}
      <nav className="space-y-3">
        <Link
          to="/"
          onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition"
        >
          <Home size={18} />
          <span className="font-semibold">Home</span>
        </Link>
        <Link
          to="/blogs"
          onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition"
        >
          <BookOpen size={18} />
          <span className="font-semibold">Blogs</span>
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition"
        >
          <Info size={18} />
          <span className="font-semibold">About</span>
        </Link>
      </nav>

      <div className="border-t border-gray-700/50 my-4"></div>

      {user ? (
        <>
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-2 
              px-4 py-2 rounded-lg text-gray-200 bg-gray-800/70 
              hover:bg-gray-700/80 border border-gray-600/40 shadow-sm transition"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/user-avatar.png"
                  className="w-8 h-8 rounded-full border border-amber-400/40"
                  alt="User Avatar"
                />
                <span className="truncate font-medium">
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-amber-400 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-3 w-full bg-gray-900/95 text-white/80 rounded-xl shadow-lg py-2 border border-gray-700/50 animate-fadeIn">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <User size={18} className="text-amber-400" />
                  <span>Profile</span>
                </Link>

                <Link
                  to="/dashboard/your-blogs"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <FileText size={18} className="text-blue-300" />
                  <span>Your Blogs</span>
                </Link>

                <Link
                  to="/dashboard/comments"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <MessageSquare size={18} className="text-amber-400" />
                  <span>Comments</span>
                </Link>

                <Link
                  to="/dashboard/write-blog"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <PencilLine size={18} className="text-blue-300" />
                  <span>Write Blog</span>
                </Link>

                <div className="border-t border-gray-700/40 my-2"></div>

                <button
                  onClick={() => setShowLogoutPopup(true)}
                  className="flex items-center gap-3 w-full px-4 py-2 text-red-400 hover:bg-red-600/20 hover:text-red-300 rounded-lg transition"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center gap-3">
        <Link to="/signup">
          <button
            className="px-7 py-2.5 rounded-lg font-semibold text-white 
            bg-gradient-to-r from-amber-500 to-amber-600 
            shadow-md hover:from-amber-400 hover:to-amber-500 
            hover:shadow-lg hover:scale-102 
            active:scale-95 transition-all duration-300"
          >
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button
            className="px-7 py-2.5 rounded-lg font-semibold text-white 
            bg-gradient-to-r from-blue-600 to-blue-700 
            shadow-md hover:from-blue-500 hover:to-blue-600 
            hover:shadow-lg hover:scale-102
            active:scale-95 transition-all duration-300"
          >
            Login
          </button>
        </Link>
      </div>
      )}

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && <LogoutPopup setShowLogoutPopup={setShowLogoutPopup} />}
    </div>
  );
}

export default MobileNavbar;
