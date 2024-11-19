// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cart.css";

export function Cart({ isOpen, onClose, hasProducts }) {
  const [amount, setAmount] = useState("00.00"); // State for the input amount

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the cart close handler
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value); // Update the amount state with the input value
  };

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="max-w-md mx-auto bg-white shadow-sm rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h1 className="text-2xl font-bold text-teal-600">My Cart</h1>
          <button className="text-black text-2xl" onClick={onClose}>
            <i className="fa-solid fa-xmark close-icon" id="close-icon"></i>
          </button>
        </div>
        {hasProducts ? (
          <>
            <p className="text-gray-600 mb-4">You have items in your cart</p>
            {/* Cart items go here... */}
          </>
        ) : (
          <p className="text-gray-600 mb-4">Your Cart is Empty</p>
        )}
        <div className="border-t-4 border-teal-600 mb-4"></div>
        {/* Cart items go here... */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-4">
            <p className="font-bold text-teal-600">Enter Amount</p>
            <div className="flex items-center">
              <span className="font-bold text-teal-600 mr-2">GH₵</span>
              <input
                type="text"
                value={amount} // Set the input value from state
                className="w-20 border rounded text-center"
                onClick={handleInputClick} // Prevent closing the cart
                onChange={handleInputChange} // Update state on input change
              />
            </div>
          </div>
          <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out transform hover:bg-teal-700 hover:scale-105">
            Checkout
          </button>
        </div>
        <p className="text-center text-gray-600">
          or{" "}
          <a href="#" className="text-teal-600">
            Continue Shopping →
          </a>
        </p>
      </div>
    </div>
  );
}

// Prop validation
Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
  onClose: PropTypes.func.isRequired, // onClose should be a function and is required
  hasProducts: PropTypes.bool.isRequired, // hasProducts should be a boolean and is required
};










// import React from "react";
// import PropTypes from "prop-types"; 
// import "./Cart.css"

// export function Cart({ isOpen, onClose }) {
//   return (
//     <div className={`cart ${isOpen ? "open" : ""}`}>
//       <div className="max-w-md mx-auto bg-white shadow-sm rounded-lg p-4">
//         <div className="flex justify-between items-center border-b pb-2 mb-4">
//           <h1 className="text-2xl font-bold text-teal-600">My Cart</h1>
//           <button className="text-black text-2xl" onClick={onClose}>
//             <i className="fa-solid fa-xmark close-icon" id="close-icon"></i>
//           </button>
//         </div>
//         <p className="text-gray-600 mb-4">You have items in your cart</p>
//         <div className="border-t-4 border-teal-600 mb-4"></div>
//         {/* Cart items go here... */}
//         <div className="flex items-center mb-4">
//           <div className="relative">
//             <img
//               src="https://placehold.co/50x50"
//               alt="Milo Sachet"
//               className="w-12 h-12 rounded-full"
//             />
//             <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           </div>
//           <div className="flex-1 ml-4">
//             <p className="font-bold">Milo Sachet</p>
//           </div>
//           <input
//             type="number"
//             value="1"
//             className="w-12 border rounded text-center"
//           />
//           <button className="text-red-600 ml-4">
//             <i className="fas fa-trash"></i>
//           </button>
//         </div>
//         <div className="flex items-center mb-4">
//           <div className="relative">
//             <img
//               src="https://placehold.co/50x50"
//               alt="Vegetable"
//               className="w-12 h-12 rounded-full"
//             />
//             <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           </div>
//           <div className="flex-1 ml-4">
//             <p className="font-bold">Vegetable</p>
//           </div>
//           <input
//             type="number"
//             value="1"
//             className="w-12 border rounded text-center"
//           />
//           <button className="text-red-600 ml-4">
//             <i className="fas fa-trash"></i>
//           </button>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg mb-4">
//           <div className="flex justify-between items-center mb-4">
//             <p className="font-bold text-teal-600">Enter Amount</p>
//             <div className="flex items-center">
//               <span className="font-bold text-teal-600 mr-2">GH₵</span>
//               <input
//                 type="text"
//                 value="00.00"
//                 className="w-20 border rounded text-center"
//               />
//             </div>
//           </div>
//           <button className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out transform hover:bg-teal-700 hover:scale-105">
//             Checkout
//           </button>
//         </div>
//         <p className="text-center text-gray-600">
//           or{" "}
//           <a href="#" className="text-teal-600">
//             Continue Shopping →
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Prop validation
// Cart.propTypes = {
//   isOpen: PropTypes.bool.isRequired, 
//   onClose: PropTypes.func.isRequired, 
// };
