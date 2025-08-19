import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Toast from "../components/Toast";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
        setTimeout(() => navigate("/"), 1200);
        dispatch(setUser(res.data.user));
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMessage =
        error.response?.data?.message || "Login failed! Please try again.";
      setToast({
        show: true,
        message: errorMessage,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Globify</title>
      </Helmet>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl m-4 border border-gray-700">
          {/* Toast */}
          {toast.show && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast({ ...toast, show: false })}
            />
          )}

          <h2 className="text-3xl font-bold mb-6 text-center text-amber-400">
            Welcome Back | Login
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                required
                value={input.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="relative w-full">
              <label className="block text-gray-300 font-medium mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                name="password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                required
                value={input.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-400 hover:text-amber-400 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-sm text-gray-400">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-amber-400 hover:underline">
                Sign Up
              </Link>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin inline-block mr-2" />
                  Please wait...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
