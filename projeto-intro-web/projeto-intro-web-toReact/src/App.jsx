import React, { useState, useEffect } from "react";

import "./App.css";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import { db } from "./db";
import { cat_db } from "./db_alt";

function App() {
  const [drugs, setDrugs] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const isSearchEmpty = (search) => {
    if (search === " ") {
      setIsSearch(!isSearch);
    }
  };

  const handleSearch = (search) => {
    const filteredDrugs = drugs.filter((item) => {
      console.log("search value received", search);
      if (search == "") {
        return item;
      } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    setDrugs(filteredDrugs);
    return filteredDrugs;
  };

  const returnSearch = (search) => search;

  const fetchDrugs = () => {
    setDrugs(cat_db);
  };

  useEffect(() => {
    fetchDrugs();
  }, [isSearch]);

  return (
    <div>
      <Navbar
        search={returnSearch}
        onSearch={handleSearch}
        isSearch={isSearchEmpty}
      />
      <Grid items={drugs} search={returnSearch} onSearch={handleSearch} />
    </div>
  );
}

export default App;
