/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./UserInfo.css"

function UserInformationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [digitalAddress, setDigitalAddress] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || {}
  );
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cartArray = Object.values(cartItems);

    const userInfo = {
      firstName,
      lastName,
      phoneNumber,
      digitalAddress,
      cartItems: cartArray,
    };

    try {
      const response = await fetch("/create-user-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) throw new Error("Failed to save user information");

      let message = `User  Information:\nName: ${userInfo.firstName} ${userInfo.lastName}\nPhone: ${userInfo.phoneNumber}\nAddress: ${userInfo.digitalAddress}\n\nOrder details:\n`;
      cartArray.forEach((item, index) => {
        const itemName = item.name || "No name";
        const itemQuantity = item.quantity || 1;
        const itemPrice = item.price ? `@ ${item.price}` : "";
        message += `${index + 1}. ${itemName} - ${itemQuantity} ${itemPrice}\n`;
      });

      const whatsappNumber = "2330594815598"; // Replace with your desired WhatsApp number
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");
      localStorage.removeItem("cartItems");

      setShowModal(true);

      // Redirect to homepage after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        window.location.href = "/"; // Redirect to homepage
      }, 15000);
    } catch (error) {
      console.error(error);
      alert("There was an error saving your information. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <div
        className="text-green-600 cursor-pointer mb-4"
        onClick={() => window.history.back()}
      >
        ← Back
      </div>
      <h1 className="text-2xl font-semibold text-center mb-6">
        User Information
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="digitalAddress" className="block text-gray-700">
            Digital Address
          </label>
          <input
            type="text"
            id="digitalAddress"
            name="digitalAddress"
            placeholder="Enter your digital address here"
            required
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-green-500"
            value={digitalAddress}
            onChange={(event) => setDigitalAddress(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded hover:from-green-500 hover:to-green-700 transition duration-300"
        >
          Continue to Checkout
        </button>
      </form>

      {showModal && (
        <div
          id="successModal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg text-center">
            <p>
              Thank you for placing your order. Our representative will get back
              to you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInformationForm;
