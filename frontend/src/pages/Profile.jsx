import React, { useState } from "react";
import { Pencil, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="p-6 pt-24 md:ml-[300px] bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full border border-white/20 hover:border-blue-500/40 transition-all duration-300">
        {/* Avatar */}
        <div className="relative group">
          <img
            src={user.photoUrl}
            alt="User Avatar"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-lg object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
              {user ? `${user.firstName} ${user.lastName}` : "User"}
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition"
            >
              <Pencil size={18} /> Edit Profile
            </button>
          </div>

          <EditProfile
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Bio */}
          <p className="text-gray-300 leading-relaxed text-lg">
            {user.bio ||
              "Sharing travel guides, tips, and experiences for passionate global explorers."}
          </p>
          <p className="text-gray-400 text-sm italic">✉️ {user.email}</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-8 mt-6">
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition transform hover:scale-125"
            >
              <Github size={28} />
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-125"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={user.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600 transition transform hover:scale-125"
            >
              <Twitter size={28} />
            </a>
            <a
              href={user.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 transition transform hover:scale-125"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
