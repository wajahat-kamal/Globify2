import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import MobileNavbar from "./Navbar/MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import DesktopNavbar from "./Navbar/DesktopNavbar";
import LogoutPopup from "./Navbar/LogoutPopup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
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
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white border-b-2 border-blue-600 animate-slideDown shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-10 flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <img
              src="/main-logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full border-2 border-amber-400"
            />
            <span className="text-2xl font-bold text-amber-400">GLOBIFY</span>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center bg-blue-700 rounded-md overflow-hidden border border-blue-500">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="bg-transparent px-4 py-2 text-sm focus:outline-none w-full text-white placeholder-blue-200"
            />
            <button className="p-2 px-3 hover:bg-blue-600 transition text-blue-200 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links - Desktop */}
       <DesktopNavbar user={user} setShowLogoutPopup={setShowLogoutPopup}/>

        {/* Burger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-amber-400 transition">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Logout Popup */}
      {showLogoutPopup &&  <LogoutPopup setShowLogoutPopup={setShowLogoutPopup}/>}

      {/* Mobile Menu */}
      <MobileNavbar toggleMenu={toggleMenu} user={user} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;
