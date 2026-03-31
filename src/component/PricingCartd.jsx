import React, { use } from 'react';
import PricingItem from './PricingItem';

const PricingCartd = ({ loadPricingData, darkMode }) => {
  const usePricingData = use(loadPricingData);
  return (
    <div className={`${darkMode ? 'bg-black ' : ''}`}>
      <div className="pt-10 pb-20 w-10/12 mx-auto">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          Simple, Transparent Pricing
        </h1>

        <p className="text-center text-lg font-semibold text-neutral-500 mt-4">
          Choose the ppan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="w-10/12 mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {usePricingData.map(plans => (
              <PricingItem key={plans.id} plans={plans} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCartd;
