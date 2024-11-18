
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const FilteredProducts = ({ products, searchTerm }) => {
  // Check if products is defined and is an array
  const filteredProducts = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

FilteredProducts.propTypes = {
  products: PropTypes.array,
  searchTerm: PropTypes.string.isRequired,
};

export default FilteredProducts;













// import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import "../App.css";
// import { Cart } from "./Cart";
// import SearchBar from "./SearchBar"; // Import the SearchBar component

// export function NavBar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search bar visibility

//   // Memoize the handleOutsideClick function
//   const handleOutsideClick = useCallback(
//     (event) => {
//       // Close menu if clicked outside
//       if (!event.target.closest(".nav-menu") && isMenuOpen) {
//         setIsMenuOpen(false);
//       }
//       // Close cart if clicked outside
//       if (!event.target.closest(".cart-container") && isCartOpen) {
//         setIsCartOpen(false);
//         document.body.classList.remove("no-scroll"); // Remove class to allow body scroll
//       }
//       // Close search if clicked outside
//       if (!event.target.closest(".search-container") && isSearchOpen) {
//         setIsSearchOpen(false);
//       }
//     },
//     [isMenuOpen, isCartOpen, isSearchOpen]
//   );

//   useEffect(() => {
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [handleOutsideClick]); // Include handleOutsideClick in the dependency array

//   const toggleCart = () => {
//     setIsCartOpen((prevIsCartOpen) => {
//       const newIsCartOpen = !prevIsCartOpen; // Determine the new state
//       if (newIsCartOpen) {
//         document.body.classList.add("no-scroll"); // Add class to prevent body scroll
//       } else {
//         document.body.classList.remove("no-scroll"); // Remove class to allow body scroll
//       }
//       return newIsCartOpen; // Return the new state
//     });
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
//   };

//   const handleSearch = (query) => {
//     console.log("Searching for:", query); // Handle the search query
//   };

//   return (
//     <>
//       <nav className="bg-teal-500 p-4 flex items-center justify-between flex-wrap sticky top-0 z-50">
//         <div className="flex items-center">
//           <img
//             src="src/assets/Images/dromjor-main-logo.png"
//             alt="Dromjor Ventures Logo"
//             className="h-12 w-25 mr-2"
//           />
//         </div>
//         <div className="nav-menu block lg:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <div
//           className={`w-full lg:flex lg:items-center lg:w-auto ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-white">
//             <Link to="/" className="nav-item hover:underline py-2 lg:py-0">
//               Home
//             </Link>
//             <Link to="/about" className="nav-item hover:underline py-2 lg:py-0">
//               About Us
//             </Link>
//             <div className="relative">
//               <a
//                 href="#"
//                 className="nav-item hover:underline py-2 lg:py-0"
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//               >
//                 Shop <i className="bx bxs-chevron-down"></i>
//               </a>
//               {isDropdownOpen && (
//                 <div
//                   className="absolute bg-white text-black mt-2 rounded shadow-lg"
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <Link
//                     to="/grocery"
//                     className="nav-item hover:underline py-2 lg:py-0"
//                   >
//                     Grocery Products
//                   </Link>
//                   <Link
//                     to="/fresh-produce"
//                     className="nav-item hover:underline py-2 lg:py-0"
//                   >
//                     Fresh Produce
//                   </Link>
//                   <Link
//                     to="/dairy"
//                     className="nav-item hover:underline py-2 lg:py-0"
//                   >
//                     Dairy Products
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <div className="search-container relative">
//               <button
//                 className="nav-item hover:underline py-2 lg:py-0"
//                 onClick={toggleSearch}
//               >
//                 <i className="fas fa-search"></i> {/* Use search icon */}
//               </button>
//             </div>
//           </div>
//           <div className="relative w-50 h-50">
//             <div
//               className="bg-teal-400 rounded-full w-50 h-50 p-2 cursor-pointer cart-container"
//               onClick={toggleCart}
//             >
//               <i className="fas fa-shopping-cart text-white text-2xl"></i>
//               <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 0
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {isSearchOpen && (
//         <div className="search-bar-container"> {/* Container for search bar */}
//           <SearchBar onSearch={handleSearch} />
//         </div>
//       )}
//       {isCartOpen && <Cart />} {/* Render the Cart component if cart is open */}
//     </>
//   );
// }