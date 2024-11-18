import React, { useEffect, useCallback } from "react";
import "./HeroSlider.css";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    "https://i.postimg.cc/T3qgmLjG/dromjor-slide01.jpg",
    "https://i.postimg.cc/jjxNhxvf/dromjor-slide02.jpg",
    "https://i.postimg.cc/bvmnC7FB/dromjor-slide03.jpg",
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="bg-gray-100 my-0 py-0 px-5">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative w-full md:w-2/3 h-full rounded-lg carousel-container">
          <div
            className="carousel-slide flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              height: "100%",
            }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="carousel-image object-cover h-full"
              />
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 glass-button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 glass-button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`pagination-dot ${
                  index === currentSlide ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col space-y-4 p-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-48">
            <img
              src="src/assets/Images/dromjor-side001.jpg"
              alt="Secondary image 1"
              className="w-full h-full object-cover secondary-image"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-48">
            <img
              src="src/assets/Images/dromjor-side002.jpg"
              alt="Secondary image 2"
              className="w-full h-full object-cover secondary-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
