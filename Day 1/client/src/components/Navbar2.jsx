import React from "react";

const Navbar2 = ({ search, handleChange }) => {
  return (
    <div>
      <h2>Search Products from Navbar</h2>
      <input placeholder="Mens.." value={search} onChange={handleChange} />
    </div>
  );
};

export default Navbar2;
