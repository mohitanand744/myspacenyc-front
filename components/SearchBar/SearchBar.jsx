import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className=" position-relative d-none d-sm-flex align-items-center search">
      <input
        type="text"
        placeholder="Search here..."
        className="form-control px-5  py-3 bg-secondary searchbar border-0 rounded-5"
      />

      <div className="searchIcon position-absolute d-flex justify-content-center align-items-center text-secondary top-50 end-0 translate-middle">
        <FiSearch />
      </div>
    </div>
  );
};

export default SearchBar;
