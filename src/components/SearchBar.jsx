// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Call the onSearch function passed from parent
  };

  const handleKeyPress = (e) => {
    // Optional: Clear input on Enter key press
    if (e.key === "Enter") {
      setQuery(""); // Clear the input after search
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress} // Optional: handle key press event
      placeholder="Search products..."
      className="p-2 rounded border border-gray-300"
      aria-label="Search products" // Accessibility improvement
    />
  );
};

// Define prop types for the SearchBar component
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Validate onSearch prop
};

export default SearchBar;
