import React, { useEffect, useState } from "react";

export default function Toast({ message, type, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animation start
    setVisible(true);

    // Auto hide after 3s
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 200); // Wait for animation to finish
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`absolute -top-14 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm mt-10 px-4 py-2 rounded-lg shadow-lg text-white text-[16px] text-center font-medium transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
      ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </div>
  );
}
