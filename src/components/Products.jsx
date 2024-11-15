import "./Products.css";

export const Products = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Featured Items</h1>
        <a href="#" className="text-blue-500">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center product_container p-4 bg-white shadow-md rounded-sm">
          <div className="relative">
            <img
              src="src/assets/Images/Full Goat.jpg"
              alt="Full Goat"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Full Goat</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Wele.jpg"
              alt="Hide meat"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Hide meat</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Nkontomire.jpg"
              alt="Nkontomire"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Nkontomire</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Orange Big size.png"
              alt="Orange"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Orange</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/img6.jpeg"
              alt="Orange"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Yam</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Snails.jpg"
              alt="Orange"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Snail</p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Kingsbite Milk Chocolate 100g.jpg"
              alt="Orange"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">
            Kingsbite Milk Chocolate 100g
          </p>
        </div>
        <div className="text-center product_container p-4 bg-white shadow-md rounded-lg">
          <div className="relative">
            <img
              src="src/assets/Images/Green Pepper.jpg"
              alt="Orange"
              className="w-full h-auto"
            />
            <button className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600">
              Add to cart
            </button>
          </div>
          <p className="mt-4 text-lg font-bold text-green-700">Green Pepper</p>
        </div>
      </div>
    </div>
  );
};
