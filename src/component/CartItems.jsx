import React, { useState } from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const CartItems = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [checkout, setCheckout] = useState(false);

  const handleDelete = id => {
    const removeItem = cart.filter(item => item.id !== id);
    setCart(removeItem);
    toast.error(`removed from cart!`);
  };

  const handleCheckout = () => {
    setCheckout(true);
    toast.success('Checkout successful!');

    setTimeout(() => {
      setCart([]);
      setCheckout(false);
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <div className="w-10/12 mx-auto bg-base-300 p-10 rounded-xl shadow-md">
        <div className="text-center py-10">
          <h1 className="text-2xl font-semibold">Your cart is empty</h1>
          <p className="text-gray-500 mt-4">
            Add some products to your cart to see them here.
          </p>
          <div className="w-full mx-auto">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mt-6" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 relative">
      {cart.map(item => (
        <div key={item.id} className="bg-base-200 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold mt-2 text-gray-900">
                  ${item.price}
                </p>
              </div>
            </div>
            <Trash2
              onClick={() => handleDelete(item.id)}
              className="w-5 h-5 text-red-500 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      ))}

      {/* Total and Checkout */}
      <div className="bg-base-300 p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">
            Total: ${totalPrice.toFixed(2)}
          </h1>
          <button
            onClick={handleCheckout}
            disabled={checkout}
            className="px-6 py-3 cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#627382] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {checkout ? 'Processing...' : 'Proceed To Checkout'}
          </button>
        </div>

        {/* Success Modal */}
        {checkout && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-auto border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="font-bold text-2xl text-gray-900 mb-3">
                  Checkout Successful!
                </h3>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Your order has been placed successfully. You will receive a
                  confirmation email shortly.
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setCheckout(false);
                      setCart([]);
                    }}
                    className="px-8 py-3 cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#627382] text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
