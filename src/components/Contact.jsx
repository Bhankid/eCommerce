// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4">
      <div
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md md:max-w-1/2"
        style={{ height: "auto" }} // Allow height to adjust automatically
      >
        <h1 className="text-2xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-center mb-6">
          Leave us a message and we&apos;ll get back to you soon!
        </p>
        <form className="space-y-4">
          <div className="floating-label">
            <input
              type="text"
              placeholder=" "
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="floating-label">
            <input
              type="email"
              placeholder=" "
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="floating-label">
            <input
              type="tel"
              placeholder=" "
              id="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label htmlFor="phone">Your Phone Number</label>
          </div>
          <div className="floating-label">
            <textarea
              placeholder=" "
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded-md btn-hover btn-click"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31768.341162514032!2d-0.235739!3d5.560698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf97e4889329a7%3A0x8989febf419b9d26!2sDromjor%20Ventures!5e0!3m2!1sen!2sgh!4v1731901303347!5m2!1sen!2sgh"
          width="100%" 
          height="500" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
