import React, { useState } from "react";
import { Pencil, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    firstName: "Wajahat",
    lastName: "Kamal",
    email: "wajahatkamal3.0@gmail.com",
    description:
      "MERN Stack Developer | Passionate about coding and creating amazing UIs.",
    avatar: "https://i.pravatar.cc/150?img=12",
    github: "https://github.com/wajahat-kamal",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  };

  return (
    <div className="p-6 pt-24 md:ml-[300px] bg-gray-950 text-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 w-full border border-white/20">
        {/* Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-40 h-40 md:w-50 md:h-50 rounded-full border-4 border-blue-500 shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-3 md:gap-0 w-full">
            <h2 className="text-3xl font-bold text-white drop-shadow">
              {user.firstName} {user.lastName}
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition"
            >
              <Pencil size={18} /> Edit Profile
            </button>
          </div>

          <EditProfile
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Bio */}
          <p className="text-gray-300 leading-relaxed">{user.description}</p>
          <p className="text-gray-400 text-sm">📧 {user.email}</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-5">
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition transform hover:scale-110"
            >
              <Github size={26} />
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
            >
              <Linkedin size={26} />
            </a>
            <a
              href={user.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600 transition transform hover:scale-110"
            >
              <Twitter size={26} />
            </a>
            <a
              href={user.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 transition transform hover:scale-110"
            >
              <Instagram size={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
