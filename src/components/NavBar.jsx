// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../App.css";
import { Cart } from "./Cart"; 

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart visibility
      if (!isCartOpen) {
        document.body.classList.add("no-scroll"); // Add class to prevent body scroll
      } else {
        document.body.classList.remove("no-scroll"); // Remove class to allow body scroll
      }
  };

  return (
    <>
      <nav className="bg-teal-500 p-4 flex items-center justify-between flex-wrap sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src="src/assets/Images/dromjor-main-logo.png"
            alt="Dromjor Ventures Logo"
            className="h-12 w-25 mr-2"
          />
        </div>
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-white">
            <a href="#" className="nav-item hover:underline py-2 lg:py-0">
              Home
            </a>
            <a href="#" className="nav-item hover:underline py-2 lg:py-0">
              About Us
            </a>
            <div className="relative">
              <a
                href="#"
                className="nav-item hover:underline py-2 lg:py-0"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Shop <i className="bx bxs-chevron-down"></i>
              </a>
              {isDropdownOpen && (
                <div
                  className="absolute bg-white text-black mt-2 rounded shadow-lg"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a href="#" className="block px-6 py-2 hover:bg-gray-200">
                    Grocery Products
                  </a>
                  <a href="#" className="block px-6 py-2 hover:bg-gray-200">
                    Fresh Produce
                  </a>
                  <a href="#" className="block px-6 py-2 hover:bg-gray-200">
                    Dairy Products
                  </a>
                  <a href="#" className="block px-6 py-2 hover:bg-gray-200">
                    Meat and Seafood
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="nav-item hover:underline py-2 lg:py-0">
              Contact
            </a>
            <button className="bg-green-700 text-white px-9 py-0 rounded my-2 lg:my-0 transition duration-300 ease-in-out transform border-2 border-transparent hover:bg-transparent hover:text-white hover:border-green-600 hover:scale-105">
              <a
                href="tel:+2335948155987"
                className="flex flex-col items-start"
              >
                <div className="flex items-center">
                  <i className="bx bxs-phone-call bx-tada"></i>
                  <span className="ml-2">to order</span>
                </div>
                <span className="mt-0">0594815598</span>
              </a>
            </button>
            <i className="fas fa-search text-white nav-item py-2 lg:py-0"></i>
          </div>
        </div>
        <div className="relative w-50 h-50">
          <div
            className="bg-teal-400 rounded-full w-50 h-50 p-2 cursor-pointer"
            onClick={toggleCart}
          >
            <i className="fas fa-shopping-cart text-white text-2xl"></i>
            <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
      <Cart isOpen={isCartOpen} onClose={toggleCart} />{" "}
      {/* Render the Cart component */}
    </>
  );
}
