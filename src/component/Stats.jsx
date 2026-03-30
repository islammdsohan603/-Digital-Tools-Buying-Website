import React from 'react';

const Stats = () => {
  return (
    <div className="bg-linear-to-l from-[#4F39F6] to-[#627382] p-8 mb-10 md:mb-20">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center text-white sm:border-b-2 md:border-b-0 md:border-r-2 sm:pb-4 md:pb-0">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              50K+
            </h1>
            <p className="text-lg font-semibold">Active Users</p>
          </div>
          <div className="text-center text-white sm:border-b-2 md:border-b-0 md:border-r-2 sm:pb-4 md:pb-0">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              200+
            </h1>
            <p className="text-lg font-semibold">Premum Tools</p>
          </div>
          <div className="text-center text-white  ">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              4.9
            </h1>
            <p className="text-lg font-semibold">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
