import React from "react";
import { Link } from "react-router-dom";
import { User, FileText, MessageSquare, PencilLine } from "lucide-react";


function DesktopNavbar({user}) {
  return (
    <div className="hidden md:flex items-center gap-3 text-[19px] font-medium relative">
      <Link to={"/"} className="hover:text-gray-300 transition">
        Home
      </Link>
      <Link to={"/about"} className="hover:text-gray-300 transition">
        About
      </Link>
      <Link to={"/blogs"} className="hover:text-gray-300 transition md:mr-3">
        Blogs
      </Link>

      {user ? (
        <>
          {/* User Dropdown */}
          <div className="relative group">
            <Link to={"/Dashboard/profile"}>
              <button className="bg-gray-700 px-3 py-2 text-[17px] rounded-md hover:bg-gray-600 transition flex justify-center items-center gap-1.5">
                <img
                  src="/user-avatar.png"
                  className="w-6 h-6 rounded-full bg-white"
                  alt=""
                />
                <span>
                  {user?.firstName} {user?.lastName}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
            </Link>

            {/* Dropdown Menu */}

            <div
              className="absolute right-0 mt-2 w-60 bg-gray-900 text-gray-200 rounded-xl shadow-2xl py-2 
opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            >
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <User size={18} className="text-indigo-400" />
                <span className="font-medium">Profile</span>
              </Link>

              <Link
                to="/dashboard/your-blogs"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <FileText size={18} className="text-green-400" />
                <span className="font-medium">Your Blogs</span>
              </Link>

              <Link
                to="/dashboard/comments"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <MessageSquare size={18} className="text-yellow-400" />
                <span className="font-medium">Comments</span>
              </Link>

              <Link
                to="/dashboard/write-blog"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <PencilLine size={18} className="text-pink-400" />
                <span className="font-medium">Write Blog</span>
              </Link>
            </div>
          </div>

          <button
            onClick={() => setShowLogoutPopup(true)}
            className="bg-gray-700 px-4 py-2 text-[17px] rounded-md hover:bg-gray-600 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={"/signup"}>
            <button className="bg-gray-700 px-4 py-2 text-[17px] rounded-md hover:bg-gray-600 transition">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-700 px-4 py-2 text-[17px] md:mt-0 mt-2 rounded-md hover:bg-gray-600 transition">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default DesktopNavbar;
