import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import axios from "axios";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        dispatch(logout());
      }
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(logout());
    }
    setShowLogoutPopup(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-800 text-white border-b-2 border-gray-500 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-10 flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <img
              src="/main-logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold">WK GLOBIFY</span>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center bg-gray-600 rounded-md overflow-hidden">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full"
            />
            <button className="p-2 px-3 hover:bg-gray-700 transition">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-3 text-[19px] font-medium">
          <Link to={"/"} className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-gray-300 transition">
            About
          </Link>
          <Link
            to={"/blogs"}
            className="hover:text-gray-300 transition md:mr-3"
          >
            Blogs
          </Link>

          {user ? (
            <>
              <Link to={"/dashboard/profile"}>
                <button className="bg-gray-700 px-3 py-2 text-[17px] rounded-md hover:bg-gray-600 transition flex justify-center items-center flex-row gap-1.5">
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

        {/* Burger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {showLogoutPopup && (
        <div className="fixed top-40 right-0 flex justify-center items-center z-50">
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

      {/* Mobile Menu */}
      <MobileNavbar toggleMenu={toggleMenu} user={user} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
