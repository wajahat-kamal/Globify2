import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  FileText,
  MessageSquare,
  PencilLine,
  Search,
  ChevronDown,
} from "lucide-react";
import LogoutPopup from "./LogoutPopup";

function MobileNavbar({ toggleMenu, user, isOpen }) {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  return (
    <div
      className={`md:hidden bg-gray-800 px-4 text-[17px] pb-6 space-y-3 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-16 right-0 w-3/4 h-screen overflow-y-auto z-40`}
    >
      {/* Static Links */}
      <Link
        to="/"
        className="block hover:text-gray-300 text-center hover:underline m-3 text-[19px]"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block hover:text-gray-300 text-center hover:underline text-[19px]"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="block hover:text-gray-300 text-center hover:underline m-3 text-[19px]"
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
              className="w-full bg-gray-700 px-3 py-2 text-[17px] rounded-md hover:bg-gray-600 transition flex justify-center items-center gap-2"
            >
              <img
                src="/user-avatar.png"
                className="w-7 h-7 rounded-full bg-white"
                alt="User Avatar"
              />
              <span className="truncate">
                {user?.firstName} {user?.lastName}
              </span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="mt-3 w-full bg-gray-900 text-gray-200 rounded-xl shadow-lg py-2 animate-fadeIn">
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <User size={18} className="text-indigo-400" />
                  <span className="font-medium">Profile</span>
                </Link>

                <Link
                  to="/dashboard/your-blogs"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <FileText size={18} className="text-green-400" />
                  <span className="font-medium">Your Blogs</span>
                </Link>

                <Link
                  to="/dashboard/comments"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <MessageSquare size={18} className="text-yellow-400" />
                  <span className="font-medium">Comments</span>
                </Link>

                <Link
                  to="/dashboard/write-blog"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition"
                  onClick={toggleMenu}
                >
                  <PencilLine size={18} className="text-pink-400" />
                  <span className="font-medium">Write Blog</span>
                </Link>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            className="w-full bg-red-600 px-4 py-2 mt-3 text-[17px] rounded-md hover:bg-red-700 transition cursor-pointer"
            onClick={() => setShowLogoutPopup(true)}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" onClick={toggleMenu}>
            <button className="w-full bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
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
        <div><LogoutPopup setShowLogoutPopup={setShowLogoutPopup}/></div>
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
