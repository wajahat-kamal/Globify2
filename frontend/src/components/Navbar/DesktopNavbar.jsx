import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  FileText,
  MessageSquare,
  PencilLine,
  LogOut,
} from "lucide-react";

function DesktopNavbar({ user, setShowLogoutPopup }) {
  return (
    <div className="hidden md:flex items-center gap-7 text-[16px] font-medium relative">
      {/* Main Navigation Links */}
      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className="text-white/80 hover:text-amber-300 transition-colors duration-200 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white/80 hover:text-amber-300 transition-colors duration-200 font-semibold"
        >
          About
        </Link>
        <Link
          to="/blogs"
          className="text-white/80 hover:text-amber-300 transition-colors duration-200 font-semibold"
        >
          Blogs
        </Link>
      </nav>

      {/* Divider */}
      <div className="h-6 w-px bg-white/20"></div>

      {/* User Section */}
      {user ? (
        <div className="relative group">
          {/* User Button */}
          <button
            className="flex items-center gap-3 px-4 py-2 rounded-xl 
            bg-white/10 backdrop-blur-md 
            hover:bg-white/20 transition-all duration-300 shadow-sm"
          >
            <img
              src={user.photoUrl || "/user-avatar.png"}
              className="w-9 h-9 rounded-full border border-white/30"
              alt="User Avatar"
            />
            <span className="text-white font-medium">
              {user?.firstName} {user?.lastName}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-300 transition-transform duration-300 group-hover:rotate-180"
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
            className="absolute right-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-md
            text-white rounded-xl shadow-xl py-2 opacity-0 invisible
            group-hover:opacity-100 group-hover:visible transition-all duration-300
            transform translate-y-2 group-hover:translate-y-0 z-50 border border-white/10"
          >
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3 px-5 py-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <User size={20} className="text-gray-300" />
              <span>Profile</span>
            </Link>

            <Link
              to="/dashboard/your-blogs"
              className="flex items-center gap-3 px-5 py-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <FileText size={20} className="text-gray-300" />
              <span>Your Blogs</span>
            </Link>

            <Link
              to="/dashboard/comments"
              className="flex items-center gap-3 px-5 py-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <MessageSquare size={20} className="text-gray-300" />
              <span>Comments</span>
            </Link>

            <Link
              to="/dashboard/write-blog"
              className="flex items-center gap-3 px-5 py-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <PencilLine size={20} className="text-gray-300" />
              <span>Write Blog</span>
            </Link>

            <div className="border-t border-white/10 my-2"></div>

            <button
              onClick={() => setShowLogoutPopup(true)}
              className="flex items-center gap-3 w-full px-5 py-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
        <Link to="/signup">
          <button
            className="px-6 py-2.5 rounded-lg font-semibold text-white 
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
            className="px-6 py-2.5 rounded-lg font-semibold text-white 
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
    </div>
  );
}

export default DesktopNavbar;
