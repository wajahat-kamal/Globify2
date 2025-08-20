import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  FileText,
  MessageSquare,
  PencilLine,
  LogOut,
} from "lucide-react";

function DesktopNavbar({ user, setShowLogoutPopup }) {
  const location = useLocation();

  const linkClasses = (path) =>
    `font-semibold text-white hover:text-yellow-400 transition-colors duration-300 ${
      location.pathname === path ? "text-yellow-400" : ""
    }`;

  return (
    <div className="hidden md:flex items-center gap-5 text-[17px] font-semibold relative">
      {/* Main Links */}
      <Link to="/" className={linkClasses("/")}>
        Home
      </Link>
      <Link to="/about" className={linkClasses("/about")}>
        About
      </Link>
      <Link to="/blogs" className={linkClasses("/blogs")}>
        Blogs
      </Link>

      {user ? (
        <div className="relative group">
          {/* User Button */}
          <button className="bg-gradient-to-r from-green-600 to-blue-900 px-4 py-2 text-[16px] rounded-xl hover:from-green-500 hover:to-blue-800 transition-all duration-300 flex justify-center items-center gap-2 shadow-md border border-green-500">
            <img
              src="/user-avatar.png"
              className="w-9 h-9 rounded-full border-2 border-yellow-400 shadow-sm"
              alt="User Avatar"
            />
            <span className="text-white font-semibold">
              {user?.firstName} {user?.lastName}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-300 transition-transform duration-300 group-hover:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className="absolute right-0 mt-3 w-64 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 
            text-white rounded-xl shadow-2xl py-3 opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 border border-green-600"
          >
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3 px-5 py-2 hover:bg-green-700/40 rounded-lg transition-colors duration-200"
            >
              <User size={20} className="text-yellow-400" />
              <span className="font-semibold">Profile</span>
            </Link>

            <Link
              to="/dashboard/your-blogs"
              className="flex items-center gap-3 px-5 py-2 hover:bg-green-700/40 rounded-lg transition-colors duration-200"
            >
              <FileText size={20} className="text-green-400" />
              <span className="font-semibold">Your Blogs</span>
            </Link>

            <Link
              to="/dashboard/comments"
              className="flex items-center gap-3 px-5 py-2 hover:bg-green-700/40 rounded-lg transition-colors duration-200"
            >
              <MessageSquare size={20} className="text-yellow-400" />
              <span className="font-semibold">Comments</span>
            </Link>

            <Link
              to="/dashboard/write-blog"
              className="flex items-center gap-3 px-5 py-2 hover:bg-green-700/40 rounded-lg transition-colors duration-200"
            >
              <PencilLine size={20} className="text-cyan-400" />
              <span className="font-semibold">Write Blog</span>
            </Link>

            <div className="border-t border-green-700 my-2"></div>

            <button
              onClick={() => setShowLogoutPopup(true)}
              className="flex items-center gap-3 w-full px-5 py-2 text-red-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white 
              rounded-lg transition-all duration-300 font-semibold"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <Link to="/signup">
            <button className="bg-gradient-to-r from-yellow-500 to-green-600 px-6 py-2 text-[16px] rounded-xl text-blue-950 font-bold shadow-lg hover:from-yellow-400 hover:to-green-500 transition-all duration-300 border border-yellow-400">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-2 text-[16px] rounded-xl text-white font-bold shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default DesktopNavbar;
