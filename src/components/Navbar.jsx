import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// 1. Accept `theme` and `toggleTheme` as props
const Navbar = ({ theme, toggleTheme }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  const servicesData = [
    {
      title: 'Design.',
      subtitle: ['Handcraft the user', 'experience.'],
      bgColor: 'bg-red-100',
    },
    {
      title: 'Technology.',
      subtitle: ['Leverage the power', 'of code.'],
      bgColor: 'bg-indigo-100',
    },
    {
      title: 'Marketing.',
      subtitle: ['Creative strategies', 'for brands.'],
      bgColor: 'bg-purple-100',
    }
  ];

  const aboutData = [
    {
      title: 'Our Story.',
      subtitle: ['How we started', 'our journey.'],
      bgColor: 'bg-red-100',
    },
    {
      title: 'Our Team.',
      subtitle: ['Meet the creative', 'minds.'],
      bgColor: 'bg-indigo-100',
    },
    {
      title: 'Careers.',
      subtitle: ['Join our growing', 'team.'],
      bgColor: 'bg-purple-100',
    }
  ];
  
  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header 
      className={`bg-white border-b border-black fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        openDropdown ? 'h-64' : 'h-20'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="max-w-screen-xl mx-auto px-16 sm:px-16 lg:px-24 h-full">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 z-10">
            <img
              src='/icon.png'
              alt="Leo9 logo"
              className="h-12 w-auto"
            />
          </a>

          {/* Right side navigation */}
          <div className="flex items-center gap-12">
            {/* Links */}
            <div className="flex items-center gap-12 text-base font-medium text-gray-800">
              <a href="#" className="hover:text-black transition-colors">
                Work
              </a>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <a href="#" className="hover:text-black transition-colors flex items-center gap-1.5">
                  Services
                  {/* Icon container for smooth transition */}
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    {/* Dot */}
                    <div className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-opacity duration-300 ${openDropdown === 'services' ? 'opacity-0' : 'opacity-100'}`}></div>
                    {/* Arrow */}
                    <svg className={`w-4 h-4 transition-opacity duration-300 ${openDropdown === 'services' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
              <a href="#" className="hover:text-black transition-colors">
                Clients
              </a>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
              >
                <a href="#" className="hover:text-black transition-colors flex items-center gap-1.5">
                  About
                  {/* Icon container for smooth transition */}
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    {/* Dot */}
                    <div className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-opacity duration-300 ${openDropdown === 'about' ? 'opacity-0' : 'opacity-100'}`}></div>
                    {/* Arrow */}
                    <svg className={`w-4 h-4 transition-opacity duration-300 ${openDropdown === 'about' ? 'opacity-100' : 'opacity-0'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
              <a href="#" className="hover:text-black transition-colors">
                Knowledge
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme} // This now correctly calls the function from App.jsx
              aria-label="Toggle theme"
              className="text-gray-800 hover:text-black transition-colors relative w-12 h-12 flex items-center justify-center"
            >
              {/* Sun SVG */}
              <svg 
                className={`absolute w-12 h-12 transition-all duration-500 ease-in-out ${
                  // 3. Use the `theme` prop instead of `isDarkMode`
                  theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
                }`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
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

              {/* Moon SVG (created from your image description) */}
              <svg 
                className={`absolute w-12 h-12 transition-all duration-500 ease-in-out ${
                  // 3. Use the `theme` prop instead of `isDarkMode`
                  theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            {/* Contact Button with hover effect */}
            <button 
              className="bg-black text-white px-12 py-3 rounded-sm font-semibold text-base transition-colors relative overflow-hidden"
              onMouseEnter={() => setIsHoveringContact(true)}
              onMouseLeave={() => setIsHoveringContact(false)}
            >
              <div className="relative h-6 overflow-hidden">
                {/* Original "Contact" text */}
                <div className={`transition-transform duration-300 ${isHoveringContact ? '-translate-y-full' : 'translate-y-0'}`}>
                  Contact
                </div>
                {/* New text that slides up from bottom */}
                <div className={`absolute top-0 left-0 w-full transition-transform duration-300 ${isHoveringContact ? 'translate-y-0' : 'translate-y-full'}`}>
                  Contact
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Dropdown Content */}
        <div className={`transition-all duration-300 overflow-hidden ${openDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="p-0">
            {/* Services Dropdown */}
            {openDropdown === 'services' && (
              <div className="grid grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`${service.bgColor} rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col`}
                  >
                    {/* Title */}
                    <h3 className="text-3xl font-extrabold text-black mb-4">
                      {service.title}
                    </h3>
                    {/* Subtitle and Arrow Row */}
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-700 text-base font-medium">
                        {service.subtitle.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < service.subtitle.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* About Dropdown */}
            {openDropdown === 'about' && (
              <div className="grid grid-cols-3 gap-6">
                {aboutData.map((about, index) => (
                  <div
                    key={index}
                    className={`${about.bgColor} rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col`}
                  >
                    {/* Title */}
                    <h3 className="text-3xl font-extrabold text-black mb-4">
                      {about.title}
                    </h3>
                    {/* Subtitle and Arrow Row */}
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-700 text-base font-medium">
                        {about.subtitle.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < about.subtitle.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;