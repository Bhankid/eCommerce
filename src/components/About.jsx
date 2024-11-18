// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css"; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Dromjor Ventures
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-content w-full md:w-1/2 p-4">
            <p>
              About Dromjors Ventures Welcome to Dromjor Ventures—your premier
              partner in delivering fresh farm produce straight to your
              doorstep. At Dromjor Ventures, we believe that everyone deserves
              access to high-quality, nutritious food, which is why we are
              passionately committed to providing the finest selection of
              fruits, vegetables, and other farm produce at affordable prices.
            </p>
          </div>
          <div className="image-content w-full md:w-1/2 p-4">
            <img
              src="/Images/img1.jpg"
              alt="Fresh Produce"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="text-content w-full md:w-1/2 p-4">
            <p>
              Our journey begins with a simple mission: to connect consumers
              with the freshest produce sourced directly from local farms. We
              understand the importance of supporting our community, which is
              why we collaborate closely with local farmers who share our
              dedication to sustainability and quality. By sourcing our products
              locally, we not only ensure that you receive the freshest items
              possible, but we also contribute to the growth and prosperity of
              our agricultural partners. Our team of experts is dedicated to
              meticulously selecting each item, ensuring that only the best
              reaches your table. We prioritize freshness, quality, and taste,
              so you can enjoy the best of nature's bounty in the comfort of
              your home. With our efficient delivery system, you can count on
              receiving your orders in a timely manner, allowing you to enjoy
              the vibrant flavors and nutritional benefits that fresh produce
              provides.
            </p>
          </div>
          <div className="image-content w-full md:w-1/2 p-4">
            <img
              src="/Images/img2.jpg"
              alt="Farm Fresh"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-content w-full md:w-1/2 p-4">
            <p>
              At Dromjor Ventures, we pride ourselves in creating a "farmtastic"
              experience for our customers. Whether you are a busy professional,
              a health-conscious family, or a culinary enthusiast, we are here
              to make healthy eating easy and enjoyable. Join us on this journey
              towards a healthier lifestyle and discover the joy of fresh,
              locally sourced produce. Thank you for choosing Dromjor
              Ventures—where freshness meets convenience, and every bite is a
              celebration of nature's goodness!
            </p>
          </div>
          <div className="image-content w-full md:w-1/2 p-4">
            <img
              src="/Images/img1.jpg"
              alt="Delivery Service"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
