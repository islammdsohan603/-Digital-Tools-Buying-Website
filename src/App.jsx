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
import Footer from './component/Footer';

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

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Navbar cart={cart} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Stats />

      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl mx-auto "></span>
          </div>
        }
      >
        <ProductsData
          loadData={loadData}
          cart={cart}
          setCart={setCart}
          darkMode={darkMode}
        />
      </Suspense>

      <Steps darkMode={darkMode} />

      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10 mb-10">
            <span className="loading loading-spinner loading-xl mx-auto "></span>
          </div>
        }
      >
        <PricingCartd loadPricingData={loadPricingData} darkMode={darkMode} />
      </Suspense>

      <ViewPicingBtn />
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
