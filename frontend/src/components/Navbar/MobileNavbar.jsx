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
      className={`md:hidden bg-blue-900 px-4 text-[17px] pb-6 space-y-3 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-16 right-0 w-3/4 h-screen overflow-y-auto z-40 border-l border-blue-700`}
    >
      {/* Static Links */}
      <Link
        to="/"
        className="block hover:text-amber-400 text-white text-center hover:underline m-3 text-[19px]"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block hover:text-amber-400 text-white text-center hover:underline text-[19px]"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="block hover:text-amber-400 text-white text-center hover:underline m-3 text-[19px]"
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
              className="w-full bg-blue-800 px-3 py-2 text-[17px] rounded-md hover:bg-blue-700 transition flex justify-center items-center gap-2 border border-blue-600"
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
                className={`transition-transform duration-200 text-blue-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-3 w-full bg-blue-800 text-white rounded-xl shadow-lg py-2 animate-fadeIn border border-blue-600">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <User size={18} className="text-amber-400" />
                  <span className="font-medium">Profile</span>
                </Link>

                <Link
                  to="/dashboard/your-blogs"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <FileText size={18} className="text-emerald-400" />
                  <span className="font-medium">Your Blogs</span>
                </Link>

                <Link
                  to="/dashboard/comments"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <MessageSquare size={18} className="text-amber-400" />
                  <span className="font-medium">Comments</span>
                </Link>

                <Link
                  to="/dashboard/write-blog"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <PencilLine size={18} className="text-cyan-400" />
                  <span className="font-medium">Write Blog</span>
                </Link>

                <div className="border-t border-blue-600 my-2"></div>

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
            <button className="w-full bg-amber-500 px-5 py-2 text-[16px] rounded-lg text-blue-900 font-medium shadow-lg hover:bg-amber-400 transition border border-amber-400">
              Signup
            </button>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="w-full bg-gray-700 px-4 py-2 mt-2 rounded-md hover:bg-gray-600 transition">
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
      <div className="flex items-center gap-2 bg-gray-600 rounded-md overflow-hidden mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full"
        />
        <button className="p-2 px-3 hover:bg-gray-700 transition">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default MobileNavbar;
