export function HeroCard() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-70 lg:h-1/4 bg-gray-100 lg:p-1 p-1">
      {" "}
      {/* Set lg:p-0 to remove padding in desktop mode */}
      <div className="max-w-2xl lg:mr-8 mb-0 lg:mt-0 lg:mb-0">
        {" "}
        {/* Set lg:mb-0 and removed mb-8 for desktop */}
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left lg:mb-0">
          Welcome to Domjor Ventures
        </h1>
        <p className="text-lg text-center lg:text-left lg:mt-0 lg:mb-0">
          Welcome to Dromjor Ventures, your premier partner in delivering fresh
          farm produce directly to your doorstep. We are committed to providing
          the highest quality fruits, vegetables, and other farm produce to our
          customers, ensuring that they receive the best possible produce at
          affordable prices. Our team of experts are dedicated to sourcing the
          freshest produce from local farms and delivering it to our customers
          in a timely and efficient manner, ensuring that they can enjoy the
          best of nature&#39;s bounty in the comfort of their homes. Count on us
          for a fresh &ldquo;farmtastic&rdquo; experience!
        </p>
      </div>
      <div className="w-full max-w-sm lg:mt-0 lg:mb-0">
        <img
          src="src/assets/Images/dromjor-bg2.png"
          alt="Person holding a phone displaying farm produce and a basket of fresh fruits and vegetables"
          className="w-full"
        />
      </div>
    </div>
  );
}
