import React from 'react';
import { FaFacebook,  FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <section className="relative pt-20 bg-mybg">
      <div className="absolute inset-0 bg-black myopacity"></div> {/* Overlay */}

      <div className="max-w-screen-xl mx-auto relative"> {/* Ensure content is above the overlay */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-tl-[50px] rounded-tr-[50px] p-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
           
            {/* GEARS Contact Info - Hidden on Small Devices */}
            <div className="mb-6 md:mb-0 hidden md:block">
              <h3 className="text-2xl text-white font-bold mb-2">GEARS</h3>
              <p className="text-gray-300">Main Campus Sector C, DHA Phase-VI Lahore</p>
              <p className="text-gray-300">Email: gears@lgu.edu.pk</p>
              <p className="text-gray-300">Phone: (92) 300-9410503</p>
            </div>

            {/* Quick Links - Hidden on Small Devices */}
            <div className="mb-6 md:mb-0 hidden md:block">
              <h4 className="text-lg text-white font-semibold mb-2">Quick Links</h4>
              <ul className="list-none space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="https://wa.me/923068845435?text=Hello%20GEARS!%20I%20have%20a%20query." className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lgugears" aria-label="Facebook">
                <FaFacebook className="text-gray-300 hover:text-white text-2xl" />
              </a>
              <a href="https://wa.me/923068845435?text=Hello%20GEARS!%20I%20have%20a%20query.
" aria-label="Whatsapp">
                <FaWhatsapp className="text-gray-300 hover:text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com/company/gearslgu-official/" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-300 hover:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/gearslgu.official" aria-label="Instagram">
                <FaInstagram className="text-gray-300 hover:text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white mt-6 pt-4 text-center text-white">
            <p>Developed By Gears</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
