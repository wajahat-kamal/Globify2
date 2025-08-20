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
      className={`md:hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 
      px-4 text-[17px] pb-6 space-y-3 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      fixed top-16 right-0 w-3/4 h-screen overflow-y-auto z-40 border-l border-emerald-600/60`}
    >
      {/* Static Links */}
      <Link
        to="/"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-yellow-400 hover:underline transition"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-yellow-400 hover:underline transition"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="block text-white text-center text-[19px] font-medium py-2 rounded-md
        hover:text-yellow-400 hover:underline transition"
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
              className="w-full bg-blue-800/80 px-3 py-2 text-[17px] rounded-lg 
              hover:bg-blue-700 transition flex justify-center items-center gap-2 
              border border-emerald-600/60"
            >
              <img
                src="/user-avatar.png"
                className="w-7 h-7 rounded-full bg-white"
                alt="User Avatar"
              />
              <span className="truncate text-white">
                {user?.firstName} {user?.lastName}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 text-yellow-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-3 w-full bg-blue-900 text-white rounded-xl shadow-lg py-2 
              animate-fadeIn border border-emerald-600/50">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <User size={18} className="text-yellow-400" />
                  <span className="font-medium">Profile</span>
                </Link>

                <Link
                  to="/dashboard/your-blogs"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <FileText size={18} className="text-emerald-400" />
                  <span className="font-medium">Your Blogs</span>
                </Link>

                <Link
                  to="/dashboard/comments"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <MessageSquare size={18} className="text-yellow-400" />
                  <span className="font-medium">Comments</span>
                </Link>

                <Link
                  to="/dashboard/write-blog"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <PencilLine size={18} className="text-emerald-400" />
                  <span className="font-medium">Write Blog</span>
                </Link>

                <div className="border-t border-emerald-600/50 my-2"></div>

                <button
                  onClick={() => setShowLogoutPopup(true)}
                  className="flex items-center gap-3 w-full px-4 py-2 text-red-300 hover:bg-red-600 hover:text-white 
                  rounded-lg transition"
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
            <button className="w-full bg-emerald-500 px-5 py-2 text-[16px] rounded-lg text-blue-950 font-medium shadow-lg hover:bg-emerald-400 transition border border-emerald-600">
              Signup
            </button>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-full bg-yellow-500 px-4 py-2 mt-2 rounded-lg text-blue-950 font-medium shadow hover:bg-yellow-400 transition border border-yellow-400">
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
        bg-gradient-to-r from-emerald-700 to-emerald-600 
        rounded-full overflow-hidden border border-yellow-400 shadow-md 
        focus-within:shadow-[0_0_12px_rgba(251,191,36,0.7)] transition-all"
      >
        <input
          type="text"
          placeholder="Search Blogs..."
          className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full text-white placeholder-yellow-200"
        />
        <button className="p-2 px-3 bg-yellow-500 hover:bg-yellow-400 transition-colors text-blue-900 hover:text-white rounded-r-full">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
