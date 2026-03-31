import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#001845] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">DigiTools</h1>
            <p className="text-gray-400 mb-6 max-w-md">
              Your one-stop shop for digital tools and software solutions.
              Empowering businesses with cutting-edge technology.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Product
            </h2>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Templates', 'Integrations'].map(
                item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Company
            </h2>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">
              Resources
            </h2>
            <ul className="space-y-3 mb-6">
              {['Documentation', 'Help Center', 'Community', 'Contact'].map(
                item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>

            <h2 className="text-lg font-semibold mb-4">Social Links</h2>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={18} />, label: 'Facebook' },
                { icon: <FaTwitter size={18} />, label: 'Twitter' },
                { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
                { icon: <FaInstagram size={18} />, label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DigiTools. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a
              href="#privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-gray-800 text-gray-500 text-sm flex items-center justify-center">
          Made with <FaHeart className="text-red-500 mx-1" /> by DigiTools Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
