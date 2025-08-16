import React, { useState } from "react";
import { Pencil, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    name: "Wajahat Kamal",
    email: "wajahatkamal3.0@gmail.com",
    bio: "MERN Stack Developer | Passionate about coding and creating amazing UIs.",
    avatar: "https://i.pravatar.cc/150?img=12",
    social: {
      github: "https://github.com/wajahat-kamal",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      Instagram: "https://instagram.com/",
    },
  };

  return (
    <div className="p-4 pt-20 md:ml-[300px] bg-gray-900 text-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-md p-6 py-8 flex flex-col md:flex-row items-center md:items-start gap-6 w-full">
        {/* Avatar */}
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />

        {/* Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-3 md:gap-0 w-full">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, {user.name}!
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              <Pencil size={16} /> Edit
            </button>
          </div>

          <EditProfile
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <p className="text-gray-600">{user.bio}</p>
          <p className="text-gray-500 text-sm">📧 Email: {user.email}</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href={user.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <Github size={22} />
            </a>
            <a
              href={user.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={user.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-sky-700 transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href={user.social.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
