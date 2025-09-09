import React from 'react';

const Navbar = () => (
  // Added `relative` to establish a stacking context and `z-10` to lift it above the bubbles.
  <header className="bg-white border-b border-black relative z-10">
    <nav className="max-w-screen-xl mx-auto px-16 sm:px-16 lg:px-20">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          {/* Replace with your logo image or SVG */}
          <img
            src="/icon.png"
            alt="Leo9 logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Right side navigation */}
        <div className="flex items-center gap-12">
          {/* Links */}
          <div className="flex items-center gap-12 text-base font-medium text-gray-800">
            <a href="#" className="hover:text-black transition-colors">
              Work
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Clients
            </a>
            <a href="#" className="hover:text-black transition-colors">
              About
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Knowledge
            </a>
          

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            className="text-gray-800 hover:text-black transition-colors"
          >
            {/* Replace with your theme icon SVG */}
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="3.5" strokeWidth="1.2" stroke="currentColor" fill="none" />
              <circle cx="12" cy="4" r="0.4" fill="currentColor" />
              <circle cx="12" cy="20" r="0.4" fill="currentColor" />
              <circle cx="20" cy="12" r="0.4" fill="currentColor" />
              <circle cx="4" cy="12" r="0.4" fill="currentColor" />
              <circle cx="17.65" cy="6.35" r="0.4" fill="currentColor" />
              <circle cx="6.35" cy="17.65" r="0.4" fill="currentColor" />
              <circle cx="17.65" cy="17.65" r="0.4" fill="currentColor" />
              <circle cx="6.35" cy="6.35" r="0.4" fill="currentColor" />
            </svg>
          </button>

          {/* Contact Button */}
          <button className="bg-black text-white px-12 py-3 rounded-sm font-semibold text-base hover:bg-gray-800 transition-colors">
            Contact
          </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;