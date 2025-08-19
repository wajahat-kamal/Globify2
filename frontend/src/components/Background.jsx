import React from "react";

function Background({ children }) {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('main-bg.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
