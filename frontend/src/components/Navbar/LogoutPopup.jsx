import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../redux/authSlice";
import axios from "axios";

function LogoutPopup({setShowLogoutPopup}) {

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

  return( 
    <div className="fixed top-20 right-1.5 md:right-[37%] flex justify-center items-center z-50">
    <div className="bg-black/80 rounded-lg shadow-lg w-67 md:w-80 p-6 text-center">
      <h2 className="text-lg font-semibold text-gray-100 mb-4">
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
          className="bg-gray-300 text-black px-3 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default LogoutPopup