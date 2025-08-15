import React from "react";

const EditProfile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000005e] backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative border border-gray-400">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full border text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full border text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Github & Linkedin */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Github
              </label>
              <input
                type="text"
                name="github"
                placeholder="Enter your Github URL"
                className="w-full border text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Linkedin
              </label>
              <input
                type="text"
                name="linkedin"
                placeholder="Enter your Linkedin URL"
                className="w-full border text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Twitter & Instagram */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                placeholder="Enter your Twitter URL"
                className="w-full border  text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                placeholder="Enter your Instagram URL"
                className="w-full border text-black text-xs border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              placeholder="Write your bio"
              defaultValue="Hi, I'm John Doe — a passionate web developer who loves building modern and interactive web applications."
              rows="3"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label>Picture</label>
            <input type="file" id="file" accept="image/*" className="" />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
