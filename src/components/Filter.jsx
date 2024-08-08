import React from "react";

const Filter = ({ onFilter = () => {} }) => {  // Default function to prevent errors
  const handleFilterChange = (e) => {
    onFilter(e.target.value); // Pass the current value of the input field to the onFilter prop
  };

  return (
    <input
      type="text"
      placeholder="Search Transactions"
      onChange={handleFilterChange}
      required
    />
  );
};

export default Filter;
