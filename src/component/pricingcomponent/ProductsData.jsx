import React, { use, useState } from 'react';
import ProductCart from './ProductCart';
import CartItems from '../CartItems';

const ProductsData = ({ loadData, cart, setCart, darkMode }) => {
  const data = use(loadData);

  const [cartBtn, setCartBtn] = useState('products');

  return (
    <div
      className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="w-10/12 mx-auto pt-10 pb-20">
        <div className="text-center space-y-2 max-w-2xl mx-auto mb-10">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {' '}
            Premium Digital Tools{' '}
          </h1>
          <p className="text-neutral-500 font-semibold text-base md:text-lg">
            Access a curated collection of premium digital tools designed to
            enhance your productivity and creativity. From AI-powered software
            to design assets, our platform offers a wide range of resources to
            help you achieve your goals faster and more efficiently.
          </p>

          <div className="flex items-center justify-center my-6">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCartBtn('products')}
                className={`px-6 py-3  cursor-pointer  ] text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl ${
                  cartBtn === 'products'
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#627382] text-white'
                    : 'bg-transparent text-gray-500 border-2 border-gray-300 hover:bg-gray-300  '
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setCartBtn('cart')}
                className={`px-6 py-3  cursor-pointer  ] text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl ${
                  cartBtn === 'cart'
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#627382] text-white'
                    : 'bg-transparent text-gray-500 border-2 border-gray-300 hover:bg-gray-300 '
                }`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>
        </div>

        {cartBtn === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {data.map(item => (
              <ProductCart
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        ) : (
          <CartItems cart={cart} setCart={setCart} />
        )}
      </div>
    </div>
  );
};

export default ProductsData;
