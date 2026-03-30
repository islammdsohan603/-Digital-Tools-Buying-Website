import React from 'react';

const PricingItem = ({ plans }) => {
  const { plan, price, description, billing, features, popular, buttonText } =
    plans;

  return (
    <div
      className={` relative cursor-pointer h-full flex flex-col bg-base-200 p-6 rounded-2xl shadow-2xl space-y-2 hover:scale-105 duration-300 ${popular ? 'bg-linear-to-l from-[#6930c3] to-[#5e60ce] text-white' : 'bg-white text-gray-800'}`}
    >
      <div
        className={` absolute -top-2 px left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${popular && 'bg-yellow-500 text-white'}`}
      >
        {popular && 'Most Popular'}
      </div>

      <h1 className="text-2xl font-bold"> {plan} </h1>
      <p
        className={`text-neutral-400 font-semibold ${popular ? 'text-white' : 'text-neutral-600'}`}
      >
        {' '}
        {description}{' '}
      </p>
      <div className="flex items-center">
        <h1 className="text-4xl font-bold"> ${price}/ </h1>
        <p
          className={` font-semibold ${popular ? 'text-white' : 'text-neutral-600'}`}
        >
          {' '}
          {billing}{' '}
        </p>
      </div>

      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2 gap-2">
          <span className="text-green-500">✓</span>
          <p
            className={`text-neutral-400 font-semibold ${popular ? 'text-white' : 'text-neutral-600'}`}
          >
            {feature}
          </p>
        </div>
      ))}

      <button
        className={`w-full mt-auto cursor-pointer py-2 rounded-lg font-bold ${
          popular
            ? 'bg-white text-black border border-gray-300'
            : 'bg-linear-to-l from-[#3f8efc] to-[#5e60ce] text-white'
        } hover:scale-105 duration-300`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingItem;
