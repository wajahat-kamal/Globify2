import React, { useState } from "react";
import {
  Pencil,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";
import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

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
    const [name, value] = e.target;

    setInput((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const changeFileHandler = (e) => {
    setInput({...input, file:e.target.files?.[0]})
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }


  return (
    <div className="p-6 pt-24 md:ml-[300px] bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full border border-white/20 hover:border-blue-500/40 transition-all duration-300">
        {/* Avatar Section */}
        <div className="relative group flex flex-col items-center">
          <div className="relative">
            <img
              src={user.photoUrl || "/user-avatar.png"}
              alt="User Avatar"
              className="relative w-45 h-45 rounded-full border-2 border-blue-500 shadow-lg object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Occupation Badge */}
          <div className="mt-5 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-md font-medium shadow-lg">
              {user.occupation || "Travel Blogger"}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 w-full">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-wide drop-shadow-md">
                {user ? `${user.firstName} ${user.lastName}` : "User"}
              </h2>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Pencil
                size={18}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              Edit Profile
            </button>
          </div>

          <EditProfile
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            user={user}
          />

          {/* Contact Info */}
          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="font-medium">{user.email}</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
            <p className="text-gray-200 leading-relaxed text-md font-medium">
              {user.bio ||
                "Write a short professional bio"}
            </p>
          </div>

          {/* Social Links - Below avatar */}

          <div className="flex justify-start gap-3">
            <a
              href={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50"
            >
              <Github
                size={20}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-800/50 rounded-lg border border-blue-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-700/50"
            >
              <Linkedin
                size={20}
                className="text-blue-300 hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href={user.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-800/50 rounded-lg border border-sky-700 hover:border-sky-400 transition-all duration-300 hover:scale-110 hover:bg-sky-700/50"
            >
              <Twitter
                size={20}
                className="text-sky-300 hover:text-white transition-colors duration-300"
              />
            </a>
            <a
              href={user.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-800/50 rounded-lg border border-pink-700 hover:border-pink-400 transition-all duration-300 hover:scale-110 hover:bg-pink-700/50"
            >
              <Instagram
                size={20}
                className="text-pink-300 hover:text-white transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
