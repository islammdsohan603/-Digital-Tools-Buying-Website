import React from 'react';

const ViewPicingBtn = () => {
  return (
    <div className="bg-linear-to-br from-[#4361ee] to-[#5e60ce] p-10 ">
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-2xl md:text-4xl lg:text-6xl text-white">
          Ready To Transform Your Workflow?
        </h1>

        <p className="text-lg text-gray-300 mt-4 mb-6 text-center">
          Don't miss out on our exclusive pricing plans. Choose the one that
          suits you best and start your journey towards enhanced productivity
          and success today!
        </p>

        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <button className=" border border-white bg-white px-8 py-2 rounded-full shadow-lg text-lg cursor-pointer hover:bg-transparent hover:text-white transition duration-300">
              Explore Products
            </button>

            <button className="border bg-transparent px-8 py-2 rounded-full text-white cursor-pointer text-lg hover:bg-white hover:text-[#4361ee] transition duration-300">
              View Pricing
            </button>
          </div>
        </div>

        <p className="text-white/50 text-center my-5 font-semibold">
          {' '}
          14-day free trial . No credit card required . Cancel anytime{' '}
        </p>
      </div>
    </div>
  );
};

export default ViewPicingBtn;
