import React, { useState } from 'react';
import { Menu, ShoppingCart, X, MoonStar, Sun } from 'lucide-react';

const Navbar = ({ cart, darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <header
        className={`fixed z-50 w-full shadow-2xs py-4 ${darkMode ? 'bg-black/80 text-white' : 'bg-base-200'}`}
      >
        <nav className="  w-10/12 mx-auto flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#627382] text-transparent bg-clip-text cursor-pointer">
            <a href="#home"> DigiTools</a>
          </h1>

          <ul className="hidden lg:flex items-center gap-6 text-sm sm:text-base">
            <li className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform">
              <a href="#products">Products</a>
            </li>
            <li className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform">
              <a href="#features">Features</a>
            </li>
            <li className="text-lg text-neutral-500 font-semibold rounded-3xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287] duration-300 transition-transform">
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <div className=" relative">
                <ShoppingCart className="w-6 h-6 text-[#4F39F6] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </div>

              <button className="px-4 py-2 text-sm sm:text-base rounded-full  text-[#4F39F6] bg-transparent cursor-pointer font-semibold shadow-2xs hover:scale-110 transition-transform duration-300">
                Login
              </button>
              <button className="px-4 py-2 text-sm sm:text-base cursor-pointer font-semibold border border-[#4F39F6] text-white bg-linear-to-r from-[#4F39F6] to-[#627382] rounded-full">
                Get Started
              </button>
            </div>

            {/* DarkMode */}
            <div
              onClick={handleDarkMode}
              className=" w-10 h-10 object-contain rounded-full bg-base-200 hidden md:flex items-center justify-center cursor-pointer hover:scale-105 duration-300 hover:bg-base-300 text-black"
            >
              {darkMode ? <Sun /> : <MoonStar />}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 cursor-pointer"
            >
              {isOpen ? <X /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {
        /* Mobile Menu */
        isOpen && (
          <div className="lg:hidden fixed top-16 right-0 z-50 w-64 bg-base-300 shadow-2xl rounded-lg p-6 flex flex-col gap-6">
            <ul className="flex flex-col items-center gap-4 text-sm">
              <li
                onClick={() => setIsOpen(false)}
                className="menu-item দে
              w-full p-2 bg-base-100 hover:bg-base-300 duration-300 text-lg rounded-2xl text-black font-semibold cursor-pointer"
              >
                <a href="#products">Products</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="menu-item দে
              w-full p-2 bg-base-100 hover:bg-base-300 duration-300 text-lg rounded-2xl text-black font-semibold cursor-pointer"
              >
                <a href="#features">Features</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="menu-item দে
              w-full p-2 bg-base-100 hover:bg-base-300 duration-300 text-lg rounded-2xl text-black font-semibold cursor-pointer"
              >
                <a href="#pricing">Pricing</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="menu-item দে
              w-full p-2 bg-base-100 hover:bg-base-300 duration-300 text-lg rounded-2xl text-black font-semibold cursor-pointer"
              >
                <a href="#testimonials">Testimonials</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="menu-item দে
              w-full p-2 bg-base-100 hover:bg-base-300 duration-300 text-lg rounded-2xl text-black font-semibold cursor-pointer"
              >
                <a href="#faq">FAQ</a>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-[#4F39F6]" />
                <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              </div>

              <button className="btn btn-login w-full rounded-2xl shadow-2xl cursor-pointer">
                Login
              </button>
              <button className="btn btn-primary w-full rounded-2xl cursor-pointer hover:shadow-2xl duration-300">
                Get Started
              </button>

              <div
                onClick={handleDarkMode}
                className="w-full h-10 flex items-center justify-center bg-base-200 rounded-full cursor-pointer"
              >
                {darkMode ? <Sun /> : <MoonStar />}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
