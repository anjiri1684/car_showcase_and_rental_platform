"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {
    console.log("Search button clicked");
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={manufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
