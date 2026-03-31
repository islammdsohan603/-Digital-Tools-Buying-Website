import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductCart = ({ item, cart, setCart }) => {
  const { name, description, price, features, period, image, tag } = item;

  const isInCart = cart.some(cartItem => cartItem.id === item.id);

  const handleBuyNow = () => {
    if (isInCart) {
      return toast.info(`${name} is already in the cart!`);
    }

    setCart([...cart, item]);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div
      className="bg-base-200 p-6 rounded-2xl shadow-lg 
  cursor-pointer hover:scale-105 transition-transform duration-300 
  relative flex flex-col h-full space-y-2"
    >
      <div
        className={`absolute top-2 right-2 px-6 py-2 text-xs font-bold rounded-full ${tag === 'popular' ? 'bg-green-300 text-black' : tag === 'best seller' ? 'bg-blue-400 text-black' : tag === 'new' ? 'bg-yellow-400 text-black' : 'bg-gray-400 text-white'}`}
      >
        {tag}
      </div>

      <div className="w-14 h-14 rounded-full bg-base-300 shadow-2xl p-1 border border-red-300 ">
        <img
          src={image}
          alt=""
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold"> {name} </h1>

      <p className="text-lg font-semibold text-neutral-600"> {description} </p>

      <div className="flex items-center">
        <h1 className="text-2xl font-bold"> ${price} </h1>/
        <p className="text-neutral-800 font-semibold"> {period} </p>
      </div>

      <ul className="list-disc list-inside space-y-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className=" list-none flex items-center gap-2 text-lg text-gray-700 font-semibold"
          >
            <Check className="text-green-400 bg-green-200 rounded-full" />{' '}
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={handleBuyNow}
        className={`mt-auto px-4 py-2 w-full cursor-pointer text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl ${
          isInCart
            ? 'bg-green-500'
            : 'bg-linear-to-r from-[#4F39F6] to-[#627382]'
        }`}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCart;
