import React, { useState } from "react";

import "./style.css";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  // const [drug, setDrug] = useState(search);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    props.onSearch(search);
  };

  const handleClick = () => {
    /* 👇 "search" stores the input field value and it is updated every time the user types into the field, due to handleChange()*/
    // props.onSearch(search);
    props.isSearch(search);
  };

  return (
    <nav>
      <a href="/">Reset array</a>
      {/* <a href="#">About</a>
      <a href="#">Contact</a> */}
      <form className="search-container">
        <input
          id="search-input"
          className="search-input"
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="button" onClick={handleClick}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
