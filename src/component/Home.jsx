import React from 'react';
import { Play } from 'lucide-react';
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div className="w-11/12   lg:w-10/12 mx-auto pt-6 pb-20 md:pt-10 lg:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start space-y-6 md:space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <div className="w-full max-w-xs bg-purple-100 px-4 py-3 rounded-full flex items-center justify-center gap-3 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></div>
            <p className="text-sm font-semibold text-purple-800">
              New AI-Powered Tools Available
            </p>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-lg lg:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Supercharge Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#627382] text-transparent bg-clip-text">
                Digital Workflow
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating fast today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="px-6 py-3 bg-linear-to-r from-[#4F39F6] to-[#627382] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Explore Products
            </button>

            <button className="px-6 py-3 border-2 border-[#4F39F6] text-[#4F39F6] rounded-full font-semibold hover:bg-[#4F39F6] hover:text-white transition-all duration-300 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Digital Tools Banner"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:ml-0 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
