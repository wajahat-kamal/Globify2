import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import axios from "axios";

function LogoutPopup({ setShowLogoutPopup }) {
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
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50">
      {/* Popup Card */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black md:mt-25 rounded-2xl shadow-2xl w-72 md:w-96 p-6 text-center border border-gray-700 scale-95 opacity-0 animate-fadeInUp">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 mb-4">
          Are you sure you want to logout?
        </h2>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 hover:shadow-red-500/40 transition duration-300"
          >
            Yes, Logout
          </button>
          <button
            onClick={() => setShowLogoutPopup(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPopup;
