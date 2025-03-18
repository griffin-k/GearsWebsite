import React, { useState } from 'react';

const Navbar: React.FC = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-lg rounded-b-[60px]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-extrabold text-white tracking-wide" aria-label="GEARS Homepage">
              GEARS
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Home">
              Home
            </a>
            <a href="/AboutUs" className="text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="About Us">
              About Us
            </a>
            <a href="/projects" className="text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Projects">
              Projects
            </a>
            <a href="https://wa.me/923068845435?text=Hello%20GEARS!%20I%20have%20a%20query." className="text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Contact">
              Contact
            </a>
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#join"
              type="button"
              className="text-white bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-lg rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:bg-gradient-to-bl hover:from-cyan-500 hover:to-blue-500 hover:border-transparent hover:shadow-xl"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-100 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 justify-center mt-4">
              <a href="#home" className="block text-center text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Home">
                Home
              </a>
              <a href="#about" className="block text-center  text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="About Us">
                About Us
              </a>
              <a href="#projects" className="block text-center  text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Projects">
                Projects
              </a>
              <a href="https://wa.me/923068845435?text=Hello%20GEARS!%20I%20have%20a%20query."  className="block text-center  text-lg text-gray-100 hover:text-white transition ease-in-out duration-300" aria-label="Contact">
                Contact
              </a>

              {/* Centered Button */}
              <div className="flex justify-center mt-4">
             
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
