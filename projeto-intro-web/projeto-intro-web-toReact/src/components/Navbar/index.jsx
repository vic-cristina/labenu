import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <form class="search-container">
        <input
          id="search-input"
          class="search-input"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <button class="search-button" type="button">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
