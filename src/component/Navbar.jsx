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
        className={`shadow-2xs py-4 ${darkMode ? 'bg-black/70 text-white' : ''}`}
      >
        <nav className="w-10/12 mx-auto flex items-center justify-between">
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
          <div className="lg:hidden bg-white shadow-2xs py-4 w-2xs mx-auto rounded-lg mt-2 right-0 top-12 absolute">
            <ul className="flex flex-col items-center gap-4 text-sm">
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform"
              >
                <a href="#products">Products</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform"
              >
                <a href="#features">Features</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-500 font-semibold rounded-3xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform"
              >
                <a href="#pricing">Pricing</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287]  duration-300 transition-transform"
              >
                <a href="#testimonials">Testimonials</a>
              </li>
              <li
                onClick={() => setIsOpen(false)}
                className="text-lg text-neutral-500 font-semibold rounded-xl px-2 py-1 cursor-pointer hover:bg-linear-to-l from-[#F875] to-[#6287] duration-300 transition-transform"
              >
                <a href="#faq">FAQ</a>
              </li>
            </ul>

            <div className="md:hidden flex flex-col items-center  gap-4">
              <div onClick={() => setIsOpen(false)} className=" relative">
                <ShoppingCart className="w-6 h-6 mt-5 text-[#4F39F6] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <span className="absolute mt-5 -top-2 -right-2 bg-[#4F39F6] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm sm:text-base rounded-full  text-[#4F39F6] bg-transparent cursor-pointer font-semibold shadow-2xs hover:scale-110 transition-transform duration-300"
              >
                Login
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm sm:text-base cursor-pointer font-semibold border border-[#4F39F6] text-white bg-linear-to-r from-[#4F39F6] to-[#627382] rounded-full"
              >
                Get Started
              </button>

              {/* DarkMode */}
              <div
                onClick={handleDarkMode}
                className=" w-full h-10 object-contain rounded-full bg-base-200 flex md:hidden items-center justify-center cursor-pointer hover:scale-105 duration-300 hover:bg-base-300 text-black"
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
