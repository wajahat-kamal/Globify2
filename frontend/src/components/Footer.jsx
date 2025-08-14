import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 px-6 md:px-12 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-white font-semibold">Wajahat Kamal</span>.
          </p>
          <p className="text-sm">
            Made with ❤️ using MERN Stack & TailwindCSS.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center gap-1 text-sm">
          {/* Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:text-white transition-colors cursor-pointer">
              Contact Us
            </p>
          </div>

          {/* Creator Info */}
          <p className="text-center">
            Created by{" "}
            <a
              href="https://wajahatkamal-dev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 font-medium transition-colors"
            >
              Wajahat Kamal
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="text-sm text-center md:text-right space-y-1">
          <p>Follow me on social media</p>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
