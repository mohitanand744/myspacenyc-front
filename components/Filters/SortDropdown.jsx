"use client";
import { useState } from "react";

const SortDropdown = () => {
  const [sortOption, setSortOption] = useState("Newest");

  const handleSort = (option) => {
    setSortOption(option);
    // Add your sorting logic here
  };

  return (
    <div className="dropdown d-inline-block h-100 rounded-5 ">
      <button
        className="btn btn-outline-secondary fs-4 h-100 rounded-5 dropdown-toggle"
        type="button"
        id="sortDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by: {sortOption}
      </button>
      <ul className="dropdown-menu fs-4 p-2" aria-labelledby="sortDropdown">
        <li>
          <button
            className={`dropdown-item ${
              sortOption === "Newest" ? "active" : ""
            }`}
            onClick={() => handleSort("Newest")}
          >
            Newest
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${
              sortOption === "Oldest" ? "active" : ""
            }`}
            onClick={() => handleSort("Oldest")}
          >
            Oldest
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${
              sortOption === "Property Name (A-Z)" ? "active" : ""
            }`}
            onClick={() => handleSort("Property Name (A-Z)")}
          >
            Property Name (A-Z)
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${
              sortOption === "Property Name (Z-A)" ? "active" : ""
            }`}
            onClick={() => handleSort("Property Name (Z-A)")}
          >
            Property Name (Z-A)
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${
              sortOption === "Status" ? "active" : ""
            }`}
            onClick={() => handleSort("Status")}
          >
            Status
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortDropdown;
