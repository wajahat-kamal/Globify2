import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Toast from "../components/Toast";
import axios from "axios";
import {Helmet} from 'react-helmet'
import {useDispatch} from 'react-redux'
import {setUser} from '../redux/authSlice'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        input,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setToast({ show: true, message: res.data.message, type: "success" });
        setTimeout(() => navigate("/"), 2000);
        dispatch(setUser(res.data.user))
      }
    } catch (error) {
      console.error("Login Error:", error);
      setToast({
        show: true,
        message: "Login failed! Please try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | WK Globify</title>
      </Helmet>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/auth.jpg')" }}
      >
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg m-4 relative">
          {toast.show && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast({ ...toast, show: false })}
            />
          )}

          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                value={input.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                value={input.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
