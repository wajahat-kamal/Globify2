import React, { useState } from "react";

const EditProfile = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    bio: user?.bio || "",
    linkedin: user?.linkedin || "",
    instagram: user?.instagram || "",
    twitter: user?.twitter || "",
    github: user?.github || "",
    file: user?.photoUrl || "",
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center md:justify-start z-50 px-3">
      {/* Modal Box */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-full max-w-md p-5 sm:p-7 border border-gray-200">
        <div className="mb-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 transition"
          >
            ✖
          </button>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl absolute top-3 right-30 md:right-40 font-bold text-gray-900 text-center">
            Edit Profile
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-2">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={input.firstName}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={input.lastName}
                onChange={changeEventHandler}
              />
            </div>
          </div>

          {/* Github & LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="github"
                placeholder="Github URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                value={input.github}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={input.linkedin}
                onChange={changeEventHandler}
              />
            </div>
          </div>

          {/* Twitter & Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="twitter"
                placeholder="Twitter URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
                value={input.twitter}
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <input
                type="text"
                name="instagram"
                placeholder="Instagram URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                value={input.instagram}
                onChange={changeEventHandler}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              name="bio"
              placeholder="Write a Description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
              value={input.bio}
              onChange={changeEventHandler}
            ></textarea>
          </div>

          {/* Picture Upload */}
          <div className="bg-gray-300 p-1 rounded-2xl">
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 
              file:mr-4 file:py-2 file:px-4
              file:rounded-2xl file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-600
              hover:file:bg-blue-100 cursor-pointer"
              onChange={changeFileHandler}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={submitHandler}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg py-2.5 font-medium hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
