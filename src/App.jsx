import './App.css';
import { ToastContainer } from 'react-toastify';

import React, { Suspense, useState } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Stats from './component/Stats';
import ProductsData from './component/pricingcomponent/ProductsData';
import Steps from './component/Steps';
import PricingCartd from './component/PricingCartd';
import ViewPicingBtn from './component/ViewPicingBtn';

const promiesData = async () => {
  const res = await fetch('/Plans.json');
  return res.json();
};

const pricingData = async () => {
  const res = await fetch('/Pricing.json');
  return res.json();
};

const App = () => {
  const loadData = promiesData();
  const loadPricingData = pricingData();

  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cart={cart} />
      <Home />
      <Stats />

      <Suspense
        fallback={
          <h1 className="text-center text-2xl font-semibold">Loading...</h1>
        }
      >
        <ProductsData loadData={loadData} cart={cart} setCart={setCart} />
      </Suspense>

      <Steps />

      <Suspense
        fallback={
          <h1 className="text-center text-2xl font-semibold">Loading...</h1>
        }
      >
        <PricingCartd loadPricingData={loadPricingData} />
      </Suspense>

      <ViewPicingBtn />

      <ToastContainer />
    </div>
  );
};

export default App;
