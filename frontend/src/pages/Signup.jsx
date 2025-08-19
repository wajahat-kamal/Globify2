import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOff, Eye, Loader2 } from "lucide-react";
import axios from "axios";
import Toast from "../components/Toast";
import { Helmet } from "react-helmet";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setToast({
          show: true,
          message: res.data.message || "Signup Successful!",
          type: "success",
        });
        setUser({ firstName: "", lastName: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1200);
      } else {
        setToast({
          show: true,
          message: res.data.message || "Signup failed",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      const errorMessage =
        error.response?.data?.message || "Signup failed! Please try again.";
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
        <title>Sign Up | Globify</title>
      </Helmet>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl m-2 border border-gray-700">
          {/* Toast */}
          {toast.show && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast({ ...toast, show: false })}
            />
          )}

          <h2 className="text-3xl font-bold mb-6 text-center text-amber-400">
            Create an Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Wajahat"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                  required
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Kamal"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                  required
                  value={user.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

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
                value={user.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="relative w-full">
              <label
                htmlFor="password"
                className="block text-gray-300 font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                name="password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                required
                value={user.password}
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

            {/* Login Link */}
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-amber-400 hover:underline">
                Login
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
                  <Loader2 className="mr-2 w-4 h-4 animate-spin inline-block" />
                  Please wait...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
