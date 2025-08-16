import React from "react";
import { Link } from "react-router-dom";
import { User, FileText, MessageSquare, PencilLine, LogOut } from "lucide-react";

function DesktopNavbar({ user, setShowLogoutPopup }) {
  return (
    <div className="hidden md:flex items-center gap-5 text-[17px] font-medium relative">
      {/* Main Links */}
      <Link to={"/"} className="hover:text-indigo-400 transition">
        Home
      </Link>
      <Link to={"/about"} className="hover:text-indigo-400 transition">
        About
      </Link>
      <Link to={"/blogs"} className="hover:text-indigo-400 transition md:mr-3">
        Blogs
      </Link>

      {user ? (
        <>
          {/* User Dropdown */}
          <div className="relative group">
            <button className="bg-gray-700 p-2 text-[16px] rounded-lg hover:bg-gray-700 transition flex justify-center items-center gap-2 shadow-md">
              <img
                src="/user-avatar.png"
                className="w-7 h-7 rounded-full border border-gray-600"
                alt="User Avatar"
              />
              <span className="text-gray-200 font-semibold">
                {user?.firstName} {user?.lastName}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 mt-3 w-64 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
              text-gray-200 rounded-xl shadow-2xl py-3 opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50"
            >
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 px-5 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <User size={20} className="text-indigo-400" />
                <span>Profile</span>
              </Link>

              <Link
                to="/dashboard/your-blogs"
                className="flex items-center gap-3 px-5 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <FileText size={20} className="text-green-400" />
                <span>Your Blogs</span>
              </Link>

              <Link
                to="/dashboard/comments"
                className="flex items-center gap-3 px-5 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <MessageSquare size={20} className="text-yellow-400" />
                <span>Comments</span>
              </Link>

              <Link
                to="/dashboard/write-blog"
                className="flex items-center gap-3 px-5 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <PencilLine size={20} className="text-pink-400" />
                <span>Write Blog</span>
              </Link>

              <div className="border-t border-gray-700 my-2"></div>

              <button
                onClick={() => setShowLogoutPopup(true)}
                className="flex items-center gap-3 w-full px-5 py-2 text-red-400 hover:bg-red-500 hover:text-white 
                rounded-lg transition-all duration-200"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to={"/signup"}>
            <button className="bg-indigo-600 px-5 py-2 text-[16px] rounded-lg text-white font-medium shadow-md hover:bg-indigo-500 transition">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-700 px-5 py-2 text-[16px] rounded-lg text-white font-medium shadow-md hover:bg-gray-600 transition">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default DesktopNavbar;
