import React from "react";
import { Link } from "react-router-dom";
import { User, FileText, MessageSquare, PencilLine, LogOut } from "lucide-react";

function DesktopNavbar({ user, setShowLogoutPopup }) {
  return (
    <div className="hidden md:flex items-center gap-5 text-[17px] font-medium relative">
      {/* Main Links */}
      <Link to={"/"} className="text-white hover:text-amber-400 transition">
        Home
      </Link>
      <Link to={"/about"} className="text-white hover:text-amber-400 transition">
        About
      </Link>
      <Link to={"/blogs"} className="text-white hover:text-amber-400 transition md:mr-3">
        Blogs
      </Link>

      {user ? (
        <>
          {/* User Dropdown */}
          <div className="relative group">
            <button className="bg-blue-800 p-2 text-[16px] rounded-lg hover:bg-blue-700 transition flex justify-center items-center gap-2 shadow-lg border border-blue-600">
              <img
                src="/user-avatar.png"
                className="w-7 h-7 rounded-full border border-blue-400"
                alt="User Avatar"
              />
              <span className="text-white font-semibold">
                {user?.firstName} {user?.lastName}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className="absolute right-0 mt-3 w-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 
              text-white rounded-xl shadow-2xl py-3 opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 border border-blue-600"
            >
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 px-5 py-2 hover:bg-blue-700 rounded-lg transition-all duration-200"
              >
                <User size={20} className="text-amber-400" />
                <span>Profile</span>
              </Link>

              <Link
                to="/dashboard/your-blogs"
                className="flex items-center gap-3 px-5 py-2 hover:bg-blue-700 rounded-lg transition-all duration-200"
              >
                <FileText size={20} className="text-emerald-400" />
                <span>Your Blogs</span>
              </Link>

              <Link
                to="/dashboard/comments"
                className="flex items-center gap-3 px-5 py-2 hover:bg-blue-700 rounded-lg transition-all duration-200"
              >
                <MessageSquare size={20} className="text-amber-400" />
                <span>Comments</span>
              </Link>

              <Link
                to="/dashboard/write-blog"
                className="flex items-center gap-3 px-5 py-2 hover:bg-blue-700 rounded-lg transition-all duration-200"
              >
                <PencilLine size={20} className="text-cyan-400" />
                <span>Write Blog</span>
              </Link>

              <div className="border-t border-blue-600 my-2"></div>

              <button
                onClick={() => setShowLogoutPopup(true)}
                className="flex items-center gap-3 w-full px-5 py-2 text-red-300 hover:bg-red-600 hover:text-white 
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
            <button className="bg-amber-500 px-5 py-2 text-[16px] rounded-lg text-blue-900 font-medium shadow-lg hover:bg-amber-400 transition border border-amber-400">
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
