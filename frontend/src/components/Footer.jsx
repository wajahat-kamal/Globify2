import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 py-4 px-6 md:px-12 border-t-2 border-blue-600 text-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-amber-400 font-semibold">Wajahat Kamal</span>.
          </p>
          <p className="text-sm text-gray-200">
            Made with ❤️ using MERN Stack & TailwindCSS.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center gap-1 text-sm text-gray-200">
          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="hover:text-amber-400 transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-amber-400 transition-colors cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:text-amber-400 transition-colors cursor-pointer">
              Contact Us
            </p>
          </div>

          {/* Creator Info */}
          <p className="text-center text-gray-200">
            Created by{" "}
            <a
              href="https://wajahatkamal-dev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Wajahat Kamal
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="text-sm text-center md:text-right space-y-1 text-gray-200">
          <p>Follow me on social media</p>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
