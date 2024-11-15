import "./Footer.css"; 

export const Footer = () => {
  return (
    <div className="bg-teal-500 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img
            src="src/assets/Images/dromjor-main-logo.png"
            alt="Dromjor Ventures Logo"
            className="mb-4"
          />
          {/* <h2 className="text-2xl font-bold">DROMJOR VENTURES</h2> */}
          <p className="mt-2">Make an Inquiry: +233594815598</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="#"
              className="text-white text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <h3 className="text-xl font-bold">Get Our Apps On</h3>
          <div className="flex space-x-4 mt-4">
            <img
              src="src/assets/Images/playstore.jpg"
              alt="Google Play Store"
              width="100"
              height="40"
              className="hover:scale-105 transition-transform duration-300"
            />
            <img
              src="src/assets/Images/appstore.jpg"
              alt="Apple App Store"
              width="100"
              height="40"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Payment Methods</h3>
          <div className="flex space-x-4 mt-4">
            <img
              src="src/assets/Images/mobile money.png"
              alt="MTN Mobile Money"
              width="150"
              height="60"
              className="hover:scale-105 transition-transform duration-300"
            />
            {/* Uncomment if needed
            <img
              src="https://placehold.co/50x50"
              alt="Telecel"
              width="50"
              height="30"
              className="hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://placehold.co/50x50"
              alt="AirtelTigo Money"
              width="50"
              height="30"
              className="hover:scale-105 transition-transform duration-300"
            />
            */}
          </div>
        </div>
      </div>
      <div className="bg-teal-700 text-center py-4 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-2 md:mb-0">
          © 2024 Dromjor Ventures. All rights reserved.
        </p>
        <a
          href="https://www.msoftghana.com/en/"
          className="text-white hover:text-gray-300 transition"
        >
          Powered by Msoft Ghana
        </a>
      </div>
    </div>
  );
};
