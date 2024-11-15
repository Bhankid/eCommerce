// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useMemo } from "react";

export const Header = () => {
  const texts = useMemo(
    () => [
      "Get the best deals on our products!",
      "Quality products at affordable prices!",
      "Fresh produce delivered to your doorstep!",
      "Shop now and enjoy exclusive offers!",
    ],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const typingSpeed = 600;
  const pauseDuration = 3000;

  useEffect(() => {
    let typingTimeout;
    let pauseTimeout;

    const typeText = () => {
      const fullText = texts[textIndex];

      if (currentText.length < fullText.length) {
        // Type the next character
        setCurrentText((prev) => prev + fullText.charAt(currentText.length));
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else {
        // Pause for a while after typing is complete
        pauseTimeout = setTimeout(() => {
          // Move to the next text in the array
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentText(""); // Clear the current text for the next typing animation
        }, pauseDuration);
      }
    };

    // Start typing the text
    typeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [currentText, textIndex, texts]);

  return (
    <div className="flex justify-between items-center bg-black p-4">
      <div className="text-sm text-white transition-opacity duration-500 ease-in-out">
        <p style={{ opacity: currentText ? 1 : 0 }}>{currentText}</p>
      </div>
      <div className="flex space-x-2 text-sm">
        <button className="bg-white text-black px-2 py-1 rounded hover:bg-gray-200 text-xs lg:px-4 lg:py-2">
          SIGN IN
        </button>
        <button className="bg-white text-black px-2 py-1 rounded hover:bg-gray-200 text-xs lg:px-4 lg:py-2">
          SIGN UP
        </button>
      </div>
    </div>
  );
};
