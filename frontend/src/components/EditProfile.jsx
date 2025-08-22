import React, { useState, useEffect } from "react";
import axios from "axios";
import { setUser, setLoading } from "../redux/authSlice";
import Toast from "./Toast";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = ({ isOpen, onClose, user }) => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    email: "",
    bio: "",
    file: null,
    preview: null,
  });

  // Reset state when modal opens/closes or user changes
  useEffect(() => {
    if (user && isOpen) {
      setInput({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        occupation: user?.occupation || "",
        github: user?.github || "",
        linkedin: user?.linkedin || "",
        twitter: user?.twitter || "",
        instagram: user?.instagram || "",
        email: user?.email || "",
        bio: user?.bio || "",
        file: null,
        preview: user?.photoUrl || null,
      });
    }
  }, [user, isOpen]);

  // Clean up object URL when preview changes
  useEffect(() => {
    return () => {
      if (input.preview && input.file) {
        URL.revokeObjectURL(input.preview);
      }
    };
  }, [input.preview, input.file]);

  if (!isOpen) return null;

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setInput((prev) => ({
        ...prev,
        file,
        preview: previewUrl,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(input).forEach((key) => {
      if (key !== "preview" && input[key]) {
        formData.append(key, input[key]);
      }
    });

    try {
      dispatch(setLoading(true));

      const res = await axios.put(
        "http://localhost:8000/api/v1/user/profile/update",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setToast({
          show: true,
          message: res.data.message || "Profile Updated Successfully",
          type: "success",
        });
        dispatch(setUser(res.data.user));
        setTimeout(() => onClose(), 1200);
      }
    } catch (error) {
      setToast({
        show: true,
        message: error.response?.data?.message || "Something went wrong!",
        type: "error",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="fixed inset-0 h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-3">
      {/* Modal Box */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-md p-6 border border-gray-200">
        {toast.show && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ ...toast, show: false })}
          />
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 transition"
          >
            ✖
          </button>
        </div>

        {/* Form */}
        <form className="space-y-3 text-black" onSubmit={submitHandler}>
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={input.firstName}
              onChange={changeEventHandler}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={input.lastName}
              onChange={changeEventHandler}
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
            value={input.email}
            onChange={changeEventHandler}
          />

          {/* Occupation */}
          <input
            type="text"
            name="occupation"
            placeholder="Occupation (e.g. Web Developer, Designer)"
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500"
            value={input.occupation}
            onChange={changeEventHandler}
          />

          {/* Github & LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black">
            <input
              type="text"
              name="github"
              placeholder="Github URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
              value={input.github}
              onChange={changeEventHandler}
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={input.linkedin}
              onChange={changeEventHandler}
            />
          </div>

          {/* Twitter & Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black">
            <input
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500"
              value={input.twitter}
              onChange={changeEventHandler}
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500"
              value={input.instagram}
              onChange={changeEventHandler}
            />
          </div>

          {/* Bio */}
          <textarea
            name="bio"
            placeholder="Write a short professional bio..."
            rows="3"
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 resize-none"
            value={input.bio}
            onChange={changeEventHandler}
          />

          {/* Picture Upload + Preview */}
          <div className="bg-gray-200 p-2 rounded-lg text-black">
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
              onChange={changeFileHandler}
            />
            {input.preview && (
              <img
                src={input.preview}
                alt="Preview"
                className="mt-3 w-20 h-20 rounded-full object-cover border"
              />
            )}
          </div>

          {/* Save Button */}
          {loading ? (
            <button
              type="button"
              disabled
              className="w-full bg-gray-400 text-white rounded-lg py-2.5 font-medium flex items-center justify-center cursor-not-allowed"
            >
              <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please wait
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg py-2.5 font-medium hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
