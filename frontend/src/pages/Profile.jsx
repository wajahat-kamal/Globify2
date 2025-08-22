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

  // Social links ko ek jagah manage karna (clean code)
  const socialLinks = [
    {
      id: "github",
      icon: Github,
      href: user?.github,
      color: "gray",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: user?.linkedin,
      color: "blue",
    },
    {
      id: "twitter",
      icon: Twitter,
      href: user?.twitter,
      color: "sky",
    },
    {
      id: "instagram",
      icon: Instagram,
      href: user?.instagram,
      color: "pink",
    },
  ];

  return (
    <div className="p-6 pt-24 md:ml-[300px] bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full border border-white/20 hover:border-blue-500/40 transition-all duration-300">
        {/* Avatar Section */}
        <div className="relative flex flex-col items-center">
          <img
            src={user?.photoUrl || "/user-avatar.png"}
            alt="User Avatar"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-blue-500 shadow-lg object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Occupation Badge */}
          <div className="mt-5 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm md:text-md font-medium shadow-lg">
              {user?.occupation || "Travel Blogger"}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-wide drop-shadow-md">
              {user ? `${user.firstName || ""} ${user.lastName || ""}` : "User"}
            </h2>

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

          {/* Edit Modal */}
          <EditProfile
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            user={user}
          />

          {/* Contact Info */}
          {user?.email && (
            <div className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="font-medium">{user.email}</span>
            </div>
          )}

          {/* Bio Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
            <p className="text-gray-200 leading-relaxed text-md font-medium">
              {user?.bio || "Write a short professional bio"}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-3 flex-wrap">
            {socialLinks.map(
              ({ id, icon: Icon, href, color }) =>
                href && (
                  <a
                    key={id}
                    href={`https://${href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border transition-all duration-300 hover:scale-110
                      ${
                        color === "gray"
                          ? "bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:bg-gray-700/50"
                          : color === "blue"
                          ? "bg-blue-800/50 border-blue-700 hover:border-blue-400 hover:bg-blue-700/50"
                          : color === "sky"
                          ? "bg-sky-800/50 border-sky-700 hover:border-sky-400 hover:bg-sky-700/50"
                          : "bg-pink-800/50 border-pink-700 hover:border-pink-400 hover:bg-pink-700/50"
                      }`}
                  >
                    <Icon
                      size={20}
                      className={`text-${color}-300 hover:text-white transition-colors duration-300`}
                    />
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
