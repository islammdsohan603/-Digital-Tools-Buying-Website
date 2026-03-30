import React from 'react';
import users from '../assets/user.png';
import packageImage from '../assets/package.png';
import rocket from '../assets/rocket.png';

const Steps = () => {
  return (
    <div className="  bg-base-200">
      <div className="mb-10 md:mb-20 w-10/12 mx-auto ">
        <div className=" p-8 text-center">
          <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold">
            Get Started In 3 Steps
          </h1>

          <p className="text-neutral-700 text-lg font-bold  mt-2">
            Start Using premium digital tools in mintues not hours
          </p>

          <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-6 pb-10">
            <div className=" relative  text-center space-y-2 bg-white p-6 rounded-lg shadow-lg h-96 items-center justify-center flex flex-col">
              <div className=" absolute text-white  top-2 right-6 w-8 h-8 rounded-full bg-linear-to-l from-[#3f8efc] to-[#5e60ce] flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <h1 className="text-lg font-bold">01</h1>
              </div>

              <div className=" w-20 h-20 object-contain rounded-full bg-base-300 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <img src={users} alt="" className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p className="text-sm text-neutral-500 font-semibold">
                Create your account in just a few clicks and start using our
                services right away.
              </p>
            </div>
            <div className=" relative text-center space-y-2 bg-white p-6 rounded-lg shadow-lg h-96 items-center justify-center flex flex-col">
              <div className=" absolute text-white  top-2 right-6 w-8 h-8 rounded-full bg-linear-to-l from-[#3f8efc] to-[#5e60ce] flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <h1 className="text-lg font-bold">02</h1>
              </div>

              <div className="w-20 h-20 object-contain rounded-full bg-base-300 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <img src={packageImage} alt="" className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold"> Choose Products </h1>
              <p className="text-sm  text-neutral-500 font-semibold">
                Browse out catalog and select the tools that best suit your
                needs and start using them immediately.
              </p>
            </div>
            <div className=" relative text-center space-y-2 bg-white p-6 rounded-lg shadow-lg h-96 items-center justify-center flex flex-col">
              <div className=" absolute text-white  top-2 right-6 w-8 h-8 rounded-full bg-linear-to-l from-[#3f8efc] to-[#5e60ce] flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <h1 className="text-lg font-bold">03</h1>
              </div>

              <div className="w-20 h-20 object-contain rounded-full bg-base-300 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 duration-300">
                <img src={rocket} alt="" className="mx-auto" />
              </div>
              <h1 className="text-2xl font-bold"> Start Creating </h1>
              <p className="text-sm  text-neutral-500 font-semibold">
                Download and start using our tools to boost your productivity
                and achieve your goals faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
