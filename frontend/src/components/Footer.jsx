import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-950 to-gray-950 border-t border-blue-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <span className="text-amber-400 font-semibold">
                Wajahat Kamal
              </span>
              .
            </p>
            <p className="text-sm">
              Made with ❤️ using <span className="text-blue-400">MERN</span> &
              <span className="text-blue-400"> TailwindCSS</span>.
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center gap-1 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
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
            <p>
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
          <div className="text-center md:text-right space-y-1">
            <p className="text-sm">Follow me on social media</p>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="#"
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
