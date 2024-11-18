// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Products.css";

export const Products = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Full Goat",
      image: "public/Images/Full Goat.jpg",
    },
    {
      id: 2,
      name: "Hide meat",
      image: "public/Images/Wele.jpg",
    },
    {
      id: 3,
      name: "Nkontomire",
      image: "src/assets/Images/Nkontomire.jpg",
    },
    {
      id: 4,
      name: "Orange",
      image: "src/assets/Images/Orange Big size.png",
    },
    {
      id: 5,
      name: "Yam",
      image: "src/assets/Images/img6.jpeg",
    },
    {
      id: 6,
      name: "Snail",
      image: "src/assets/Images/Snails.jpg",
    },
    {
      id: 7,
      name: "Kingsbite Milk Chocolate 100g",
      image: "src/assets/Images/Kingsbite Milk Chocolate 100g.jpg",
    },
    {
      id: 8,
      name: "Green Pepper",
      image: "src/assets/Images/Green Pepper.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Featured Items</h1>
        <Link to="/all" className="text-blue-500">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center product_container p-4 bg-white shadow-md rounded-lg"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
              <button
                className="absolute top-1 right-1 bg-green-500 text-white px-2 py-0.5 rounded-full hover:bg-green-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
            <p className="mt-4 text-lg font-bold text-green-700">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
