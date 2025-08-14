import { ChartColumnBig, MessageSquare, SquarePen, SquareUser } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
 
  const navItems =  [
    { to: "/dashboard/profile", label: "Profile", icon: <SquareUser /> },
    { to: "/dashboard/your-blog", label: "Your Blogs", icon: <ChartColumnBig /> },
    { to: "/dashboard/comments", label: "Comments", icon: <MessageSquare /> },
    { to: "/dashboard/write-blog", label: "Write Blog", icon: <SquarePen /> },
  ]

  return (
    <div className="hidden md:block mt-10 p-10 space-y-2 h-screen fixed z-10 bg-gray-800 border-r-2 border-gray-600 w-[300px]">
      {/* <div className="text-center pt-10 px-3 space-y-2">
        <NavLink
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            `text-xl  text-gray-200 ${
              isActive ? "bg-gray-900" : "bg-transparent  border-1 border-gray-600"
            } flex items-center cursor-pointer font-bold gap-2 p-3 pl-5 rounded-2xl`
          }
        >
          <SquareUser />
          <span>Profile</span>
        </NavLink>
        <NavLink
          to={"/dashboard/your-blog"}
          className={({ isActive }) =>
            `text-xl  text-gray-200 ${
              isActive ? "bg-gray-900" : "bg-transparent border-1 border-gray-600"
            } flex items-center cursor-pointer font-bold gap-2 p-3 pl-5 rounded-2xl`
          }
        >
          <ChartColumnBig />
          <span>Your Blogs</span>
        </NavLink>
        <NavLink
          to={"/dashboard/comments"}
          className={({ isActive }) =>
            `text-xl  text-gray-200 ${
              isActive ? "bg-gray-900" : "bg-transparent border-1 border-gray-600"
            } flex items-center cursor-pointer font-bold gap-2 p-3 pl-5 rounded-2xl`
          }
        >
          <MessageSquare />
          <span>Comments</span>
        </NavLink>
        <NavLink
          to={"/dashboard/write-blog"}
          className={({ isActive }) =>
            `text-xl  text-gray-200 ${
              isActive ? "bg-gray-900" : "bg-transparent border-1 border-gray-600"
            } flex items-center cursor-pointer font-bold gap-2 p-3 pl-5 rounded-2xl`
          }
        >
          <SquarePen />
          <span>Write Blog</span>
        </NavLink>
      </div> */}
      <div className="text-center pt-10 px-3 space-y-2">
         {navItems.map((navItem) => (
           <NavLink 
            key={navItem.to}
            to={navItem.to}
            className={({ isActive }) =>
              `text-xl  text-gray-200 ${
                isActive ? "bg-gray-900" : "bg-transparent  border-1 border-gray-600"
              } flex items-center cursor-pointer font-bold gap-2 p-3 pl-5 rounded-2xl`
            }
           >
            {navItem.icon}
            <span>{navItem.label}</span>
           </NavLink>
         ))}
      </div>
    </div>
  );
}

export default Sidebar;
