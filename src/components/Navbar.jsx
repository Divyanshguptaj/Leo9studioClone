// components/Leo9Navbar.jsx
import React, { useState } from "react";
import LeoIcon from "../assets/icon.png";

const Dot = ({ className = "" }) => (
  <svg viewBox="0 0 8 8" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="4" cy="4" r="3" />
  </svg>
);

const ThemeIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
    <circle cx="12" cy="4" r="1" fill="currentColor" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
    <circle cx="20" cy="12" r="1" fill="currentColor" />
    <circle cx="4" cy="12" r="1" fill="currentColor" />
    <circle cx="17.65" cy="6.35" r="1" fill="currentColor" />
    <circle cx="6.35" cy="17.65" r="1" fill="currentColor" />
    <circle cx="17.65" cy="17.65" r="1" fill="currentColor" />
    <circle cx="6.35" cy="6.35" r="1" fill="currentColor" />
  </svg>
);

const Leo9Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Identity",
    "E-commerce Solutions",
  ];

  const aboutItems = ["Our Story", "Team", "Career", "Culture"];

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={LeoIcon}
              alt="Leo9 logo"
              className="h-12 w-auto"
            />
            {/* <span className="text-4xl font-medium text-gray-800 tracking-tighter">Leo9</span> */}
          </a>

          {/* Right side navigation */}
          <div className="flex items-center gap-8">
            {/* Links */}
            <div className="flex items-center gap-8 text-base font-medium text-gray-800">
              <a href="#" className="hover:text-black transition-colors">
                Work
              </a>

              {/* Services Dropdown */}
              <div
                onMouseEnter={() => setHoveredMenu("services")}
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative"
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={hoveredMenu === "services"}
                  className="flex items-center gap-2"
                >
                  <span>Services</span>
                  <Dot className="w-1.5 h-1.5" />
                </button>

                {hoveredMenu === "services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {services.map((s, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-black transition-colors">
                Clients
              </a>

              {/* About Dropdown */}
              <div
                onMouseEnter={() => setHoveredMenu("about")}
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative"
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={hoveredMenu === "about"}
                  className="flex items-center gap-2"
                >
                  <span>About</span>
                  <Dot className="w-1.5 h-1.5" />
                </button>

                {hoveredMenu === "about" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {aboutItems.map((a, i) => (
                      <a key={i} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        {a}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-black transition-colors">
                Knowledge
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              aria-label="Toggle theme"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <ThemeIcon className="w-7 h-7" />
            </button>

            {/* Contact Button */}
            <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Leo9Navbar;
