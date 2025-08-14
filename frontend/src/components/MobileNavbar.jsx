import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import axios from "axios";
import { Search } from "lucide-react";

function MobileNavbar({ toggleMenu, user, isOpen }) {
  const dispatch = useDispatch();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      dispatch(logout());
      toggleMenu();
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(logout());
      toggleMenu();
    }
    setShowLogoutPopup(false);
  };

  return (
    <div
      className={`md:hidden bg-gray-800 px-4 text-[17px] pb-4 space-y-3 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-16 right-0 w-3/4 h-screen z-40`}
    >
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
          <Link to={"/dashboard"}>
            <button className="w-full bg-gray-700 px-3 py-2 text-[17px] rounded-md hover:bg-gray-600 transition flex justify-center items-center flex-row gap-2">
              <picture>
                <img
                  src="user-avatar.webp"
                  className="w-6 h-6 rounded-full bg-white"
                  alt=""
                />
              </picture>
              {user?.firstName} {user?.lastName}
            </button>
          </Link>
          <button
            className="w-full bg-gray-700 px-4 py-2 mt-2 text-[17px] rounded-md hover:bg-gray-600 transition cursor-pointer"
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

      {showLogoutPopup && (
        <div className="fixed bottom-70 -left-15 flex justify-center items-center z-50">
          {/* Popup Box */}
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center transform transition-all duration-300 ease-out opacity-0 translate-y-[-20px] animate-[fadeSlideIn_0.3s_ease-out_forwards]">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 bg-gray-600 rounded-md overflow-hidden mt-1">
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
