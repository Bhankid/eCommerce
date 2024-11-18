// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; 
import "../App.css";
import { Cart } from "./Cart";

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  // Memoize the handleOutsideClick function
  const handleOutsideClick = useCallback(
    (event) => {
      // Close menu if clicked outside
      if (!event.target.closest(".nav-menu") && isMenuOpen) {
        setIsMenuOpen(false);
      }
      // Close cart if clicked outside
      if (!event.target.closest(".cart-container") && isCartOpen) {
        setIsCartOpen(false);
        document.body.classList.remove("no-scroll"); // Remove class to allow body scroll
      }
    },
    [isMenuOpen, isCartOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]); // Include handleOutsideClick in the dependency array

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => {
      const newIsCartOpen = !prevIsCartOpen; // Determine the new state
      if (newIsCartOpen) {
        document.body.classList.add("no-scroll"); // Add class to prevent body scroll
      } else {
        document.body.classList.remove("no-scroll"); // Remove class to allow body scroll
      }
      return newIsCartOpen; // Return the new state
    });
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
        <div className="nav-menu block lg:hidden">
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
            <Link to="/" className="nav-item hover:underline py-2 lg:py-0">
              Home
            </Link>
            <Link to="/about" className="nav-item hover:underline py-2 lg:py-0">
              About Us
            </Link>
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
                  <Link
                    to="/grocery"
                    className="nav-item hover:underline py-2 lg:py-0"
                  >
                    Grocery Products
                  </Link>
                  <Link
                    to="/fresh-produce"
                    className="nav-item hover:underline py-2 lg:py-0"
                  >
                    Fresh Produce
                  </Link>
                  <Link
                    to="/dairy-products"
                    className="nav-item hover:underline py-2 lg:py-0"
                  >
                    Dairy Products
                  </Link>
                  <Link
                    to="/meat-seafood"
                    className="nav-item hover:underline py-2 lg:py-0"
                  >
                    Meat and Seafood
                  </Link>
                  <Link
                    to="/other-products"
                    className="nav-item hover:underline py-2 lg:py-0"
                  >
                    Other Products
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="nav-item hover:underline py-2 lg:py-0"
            >
              Contact
            </Link>
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
            <i className="fas fa-search text-white nav-item py-2 lg:py-0 search-icon"></i>
          </div>
        </div>
        <div className="relative w-50 h-50">
          <div
            className="bg-teal-400 rounded-full w-50 h-50 p-2 cursor-pointer cart-container"
            onClick={toggleCart}
          >
            <i className="fas fa-shopping-cart text-white text-2xl"></i>
            <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </nav>
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        className="cart-container"
      />{" "}
      {/* Render the Cart component */}
    </>
  );
}
