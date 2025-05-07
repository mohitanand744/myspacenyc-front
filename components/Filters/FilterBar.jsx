"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import BootstrapSearchBar from "../common/SearchBar";
import DateRangeFlatpickr from "../common/DateRange";

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [bedSelection, setBedSelection] = useState(null > null);
  const [bathSelection, setBathSelection] = useState(null > null);
  const [selectedLines, setSelectedLines] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const mainFilters = [
    { id: "price", label: "Price" },
    { id: "locations", label: "Locations" },
    { id: "sort", label: "Sort" },
    { id: "beds", label: "Beds / Baths" },
    { id: "subway", label: "Subway" },
    { id: "noFee", label: "No Fee Only" },
    { id: "availability", label: "Availability" },
    { id: "amenities", label: "Amenities" },
    { id: "petPolicy", label: "Pet Policy" },
    { id: "reset", label: "Reset" },
  ];
  const petPolicyOptions = [
    { id: 1, label: "All Pets Allowed", value: "all" },
    { id: 2, label: "Pets on Approval", value: "approval" },
    { id: 3, label: "No Pets Allowed", value: "none" },
  ];

  const amenitiesWithStatus = [
    { name: "Refrigerator/oven", checked: false },
    { name: "Stainless steel appliances", checked: false },
    { name: "Terrace", checked: false },
    { name: "Tiled floors", checked: false },
    { name: "Private Outdoor Space", checked: false },
    { name: "Backyard", checked: false },
    { name: "Central A/C", checked: false },
    { name: "City Views", checked: false },
  ];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const clearOptions = () => {
    setSelectedOptions([]);
  };

  const locations = [
    {
      borough: "Brooklyn",
      neighborhoods: [
        "Bath Beach",
        "Bay Ridge",
        "Bed-Stuy",
        "Bensonhurst",
        "Boerum Hill",
      ],
    },
    {
      borough: "Manhattan",
      neighborhoods: [
        "Upper East Side",
        "Lower East Side",
        "Harlem",
        "Chelsea",
        "SoHo",
      ],
    },                                                                                                                                                                                                                           
    {
      borough: "Queens",
      neighborhoods: [
        "Astoria",
        "Long Island City",
        "Flushing",
        "Forest Hills",
        "Jackson Heights",
      ],
    },
  ];        

  const sortOptions = [
    "Price: High to Low",
    "Price: Low to High",
    "Roommate Interest",
    "Unit Number",
    "Date Available",
    "Recently Updated",
    "Recently Created",
  ];

  const subwayLines = [
    "Van Cortlandt Park - 242 St",
    "238 St",
    "231 St",
    "Marble Hill - 225 St",
    "215 St",
    "207 St",
    "68 St - Washington Hts",
  ];

  const toggleLocation = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };

  const clearFilter = () => {
    switch (activeFilter) {
      case "price":
        setPriceRange({ min: "", max: "" });
        break;
      case "locations":
        setSelectedLocations([]);
        break;
      case "beds":
        setBedSelection(null);
        setBathSelection(null);
        break;
      case "subway":
        setSelectedLines([]);
        break;
    }
  };

  return (
    <div className="py-5 mx-auto border-top border-secondary filterNav tf-container xl bg-light rounded-3 mb-4">
      <div className="d-flex flex-wrap align-items-center gap-2 position-relative">
        {/* Main Filters */}
        <div
          className="btn-group hideSidebar d-flex justify-content-center w-100 mx-auto gap-4 align-items-center overflow-responsive"
          role="group"
        >
          {mainFilters.map((filter) => (
            <>
              <div className="dropdown flex-grow-1 " key={filter.id}>
                <button
                  className={`btn flex-grow-1 w-100 activeBtn rounded-3 fs-4 ${
                    filter.id === "reset" ? "" : "dropdown-toggle"
                  } ${
                    activeFilter === filter.id && filter.id !== "reset"
                      ? "btn-warning text-white"
                      : "btn-outline-secondary"
                  }`}
                  type="button"
                  onClick={() => handleFilterClick(filter.id)}
                  aria-expanded={activeFilter === filter.id}
                >
                  {filter.label}
                </button>

                {activeFilter === filter.id && filter.id !== "reset" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="dropdown-menu border show nonModel rounded-4 p-3"
                    style={{
                      width: "fit-content",
                      maxHeight: "500px",
                      overflowY: "auto",
                      overflowX: "hidden",
                      marginTop: "10px",
                      zIndex: 99999,
                    }}
                  >
                    {filter.id === "price" && (
                      <>
                        <h4 className="text-secondary mb-3 title">
                          Price Range
                        </h4>
                        <div
                          style={{
                            width: "360px",
                          }}
                          className="d-flex gap-3 mb-3"
                        >
                          <div className="flex-grow-1">
                            <label className="form-label fs-3">Min</label>
                            <input
                              type="number"
                              className="form-control bg-white text-secondary fs-3"
                              placeholder="$ Min"
                              value={priceRange.min}
                              onChange={(e) =>
                                setPriceRange({
                                  ...priceRange,
                                  min: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex-grow-1">
                            <label className="form-label fs-3">Max</label>
                            <input
                              type="number"
                              className="form-control bg-white text-secondary fs-3"
                              placeholder="$ Max"
                              value={priceRange.max}
                              onChange={(e) =>
                                setPriceRange({
                                  ...priceRange,
                                  max: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {filter.id === "locations" && (
                      <>
                        <h5 className="title text-secondary">
                          Select Neighborhoods
                        </h5>

                        <BootstrapSearchBar
                          onSearch={(query) => {
                            // Handle search logic here
                            console.log("Search query:", query);
                          }}
                          placeholder="Search neighborhoods..."
                          autoFocus={true}
                        />
                        <div
                          style={{
                            width: "460px",
                          }}
                          className="row"
                        >
                          {locations.map((location) => (
                            <div className="col-md-6" key={location.borough}>
                              <h6 className="my-3">{location.borough}</h6>
                              <div className="list-group list-group-flush">
                                {location.neighborhoods.map((neighborhood) => (
                                  <label
                                    key={neighborhood}
                                    className="list-group-item fs-4 text-secondary"
                                  >
                                    <input
                                      className="form-check-input rounded-5 custom-yellow me-2"
                                      type="checkbox"
                                      checked={selectedLocations.includes(
                                        neighborhood
                                      )}
                                      onChange={() =>
                                        toggleLocation(neighborhood)
                                      }
                                    />
                                    {neighborhood}
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {filter.id === "sort" && (
                      <>
                        <h5 className="title text-secondary">Sort</h5>
                        <BootstrapSearchBar
                          onSearch={(query) => {
                            // Handle search logic here
                            console.log("Search query:", query);
                          }}
                          placeholder="Search here..."
                          autoFocus={true}
                        />
                        <div
                          style={{
                            width: "360px",
                          }}
                          className="row"
                        >
                          <div className="col-12" key={location.borough}>
                            <h6 className="mt-3">{location.borough}</h6>
                            <div className="list-group list-group-flush">
                              {sortOptions.map((option) => (
                                <label
                                  key={option}
                                  className="list-group-item fs-4 text-secondary"
                                >
                                  <input
                                    className="form-check-input rounded-5 custom-yellow me-2"
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => toggleOption(option)}
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {filter.id === "beds" && (
                      <>
                        <h5 className="title text-secondary">Beds & Baths</h5>
                        <div
                          className="row pt-4 rounded-5"
                          style={{
                            width: "360px",
                            marginTop: "4px",
                            marginBottom: "15px",
                          }}
                        >
                          <div className="col-md-6">
                            <h6 className="mt-2 text-secondary">Beds</h6>
                            <div className="d-flex gap-2 w-100">
                              {["1", "2", "3", "4+"].map((bed) => (
                                <button
                                  key={bed}
                                  className={`btn fs-4 ${
                                    bedSelection === bed
                                      ? "btn-warning text-white"
                                      : "btn-outline-secondary"
                                  } text-start`}
                                  onClick={() => setBedSelection(bed)}
                                >
                                  {bed}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h6 className="mt-2 text-secondary">Baths</h6>
                            <div className="d-flex gap-2 w-100">
                              {["1", "2", "3", "4+"].map((bath) => (
                                <button
                                  key={bath}
                                  className={`btn fs-4  ${
                                    bathSelection === bath
                                      ? "btn-warning text-white"
                                      : "btn-outline-secondary"
                                  } text-start`}
                                  onClick={() => setBathSelection(bath)}
                                >
                                  {bath}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {filter.id === "subway" && (
                      <>
                        <h4 className="mb-4 text-secondary">Subway Lines</h4>

                        <BootstrapSearchBar
                          onSearch={(query) => {
                            // Handle search logic here
                            console.log("Search query:", query);
                          }}
                          placeholder="Search here......"
                          autoFocus={true}
                        />
                        <div
                          style={{
                            width: "280px",
                          }}
                          className="row"
                        >
                          <div className="col-12">
                            <div className="list-group list-group-flush">
                              {sortOptions.map((line) => (
                                <label
                                  key={line}
                                  className="list-group-item fs-4 text-secondary"
                                >
                                  <input
                                    className="form-check-input rounded-5 custom-yellow me-2"
                                    type="checkbox"
                                    checked={selectedLines.includes(line)} // ✅ this is the fix
                                    onChange={() => {
                                      setSelectedLines((prev) =>
                                        prev.includes(line)
                                          ? prev.filter((l) => l !== line)
                                          : [...prev, line]
                                      );
                                    }}
                                  />
                                  {line}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {filter.id === "availability" && (
                      <div
                        style={{
                          width: "400px",
                          height: "auto",
                        }}
                      >
                        <h5 className="title text-secondary">Availability</h5>
                        <DateRangeFlatpickr />
                      </div>
                    )}

                    {filter.id === "amenities" && (
                      <>
                        <h4 className="mb-4 text-secondary">Amenities</h4>

                        <BootstrapSearchBar
                          onSearch={(query) => {
                            // Handle search logic here
                            console.log("Search query:", query);
                          }}
                          placeholder="Search here......"
                          autoFocus={true}
                        />
                        <div
                          style={{
                            width: "280px",
                          }}
                          className="row"
                        >
                          <div className="col-12">
                            <div className="list-group list-group-flush">
                              {amenitiesWithStatus.map((line) => (
                                <label
                                  key={line}
                                  className="list-group-item fs-4 text-secondary"
                                >
                                  <input
                                    className="form-check-input rounded-5 custom-yellow me-2"
                                    type="checkbox"
                                  />
                                  {line.name}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {filter.id === "petPolicy" && (
                      <>
                        <h4 className="mb-4 text-secondary">Subway Lines</h4>

                        <BootstrapSearchBar
                          onSearch={(query) => {
                            // Handle search logic here
                            console.log("Search query:", query);
                          }}
                          placeholder="Search documents..."
                          autoFocus={true}
                        />
                        <div
                          style={{
                            width: "280px",
                          }}
                          className="row"
                        >
                          <div className="col-12">
                            <div className="list-group list-group-flush">
                              {petPolicyOptions.map((line) => (
                                <label
                                  key={line}
                                  className="list-group-item fs-4 text-secondary"
                                >
                                  <input
                                    className="form-check-input rounded-5 custom-yellow me-2"
                                    type="checkbox"
                                  />
                                  {line.label}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Add other filter dropdowns here */}

                    <div className="d-flex justify-content-end gap-2 mt-3">
                      <button className="bg-transparent" onClick={clearFilter}>
                        <a className="tf-btn  py-2 border style-border px-4 h-75 fs-4 fw-6">
                          Clear
                        </a>
                      </button>
                      <button
                        className="bg-transparent"
                        onClick={() => setActiveFilter(null)}
                      >
                        <a className="tf-btn bg-color-primary py-2 border px-4 h-75 fs-4 fw-6">
                          Apply
                        </a>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Dropdown Menus */}
              {activeFilter === filter.id && filter.id !== "reset" && (
                <div
                  onClick={() => handleFilterClick(filter.id)}
                  className="model d-flex justify-content-center align-items-center overflow-hidden"
                >
                  {activeFilter === filter.id && filter.id !== "reset" && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu border show rounded-4 p-3"
                      style={{
                        width: "fit-content",
                        maxHeight: "500px",
                        overflowY: "auto",
                        overflowX: "hidden",
                        zIndex: 99999,
                      }}
                    >
                      {filter.id === "price" && (
                        <>
                          <h4 className="text-secondary mb-3 title">
                            Price Range
                          </h4>
                          <div
                            style={{
                              width: "360px",
                            }}
                            className="d-flex gap-3 mb-3"
                          >
                            <div className="flex-grow-1">
                              <label className="form-label fs-3">Min</label>
                              <input
                                type="number"
                                className="form-control bg-white text-secondary fs-3"
                                placeholder="$ Min"
                                value={priceRange.min}
                                onChange={(e) =>
                                  setPriceRange({
                                    ...priceRange,
                                    min: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="flex-grow-1">
                              <label className="form-label fs-3">Max</label>
                              <input
                                type="number"
                                className="form-control bg-white text-secondary fs-3"
                                placeholder="$ Max"
                                value={priceRange.max}
                                onChange={(e) =>
                                  setPriceRange({
                                    ...priceRange,
                                    max: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {filter.id === "locations" && (
                        <>
                          <h5 className="title text-secondary">
                            Select Neighborhoods
                          </h5>

                          <BootstrapSearchBar
                            onSearch={(query) => {
                              // Handle search logic here
                              console.log("Search query:", query);
                            }}
                            placeholder="Search neighborhoods..."
                            autoFocus={true}
                          />
                          <div
                            style={{
                              width: "460px",
                            }}
                            className="row"
                          >
                            {locations.map((location) => (
                              <div className="col-md-6" key={location.borough}>
                                <h6 className="my-3">{location.borough}</h6>
                                <div className="list-group list-group-flush">
                                  {location.neighborhoods.map(
                                    (neighborhood) => (
                                      <label
                                        key={neighborhood}
                                        className="list-group-item fs-4 text-secondary"
                                      >
                                        <input
                                          className="form-check-input rounded-5 custom-yellow me-2"
                                          type="checkbox"
                                          checked={selectedLocations.includes(
                                            neighborhood
                                          )}
                                          onChange={() =>
                                            toggleLocation(neighborhood)
                                          }
                                        />
                                        {neighborhood}
                                      </label>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {filter.id === "sort" && (
                        <>
                          <h5 className="title text-secondary">Sort</h5>
                          <BootstrapSearchBar
                            onSearch={(query) => {
                              // Handle search logic here
                              console.log("Search query:", query);
                            }}
                            placeholder="Search here..."
                            autoFocus={true}
                          />
                          <div
                            style={{
                              width: "360px",
                            }}
                            className="row"
                          >
                            <div className="col-12" key={location.borough}>
                              <h6 className="mt-3">{location.borough}</h6>
                              <div className="list-group list-group-flush">
                                {sortOptions.map((option) => (
                                  <label
                                    key={option}
                                    className="list-group-item fs-4 text-secondary"
                                  >
                                    <input
                                      className="form-check-input rounded-5 custom-yellow me-2"
                                      type="checkbox"
                                      checked={selectedOptions.includes(option)}
                                      onChange={() => toggleOption(option)}
                                    />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {filter.id === "beds" && (
                        <>
                          <h5 className="title text-secondary">Beds & Baths</h5>
                          <div
                            className="row pt-4 rounded-5"
                            style={{
                              width: "360px",
                              marginTop: "4px",
                              marginBottom: "15px",
                            }}
                          >
                            <div className="col-md-6">
                              <h6 className="mt-2 text-secondary">Beds</h6>
                              <div className="d-flex gap-2 w-100">
                                {["1", "2", "3", "4+"].map((bed) => (
                                  <button
                                    key={bed}
                                    className={`btn fs-4 ${
                                      bedSelection === bed
                                        ? "btn-warning text-white"
                                        : "btn-outline-secondary"
                                    } text-start`}
                                    onClick={() => setBedSelection(bed)}
                                  >
                                    {bed}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <h6 className="mt-2 text-secondary">Baths</h6>
                              <div className="d-flex gap-2 w-100">
                                {["1", "2", "3", "4+"].map((bath) => (
                                  <button
                                    key={bath}
                                    className={`btn fs-4  ${
                                      bathSelection === bath
                                        ? "btn-warning text-white"
                                        : "btn-outline-secondary"
                                    } text-start`}
                                    onClick={() => setBathSelection(bath)}
                                  >
                                    {bath}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {filter.id === "subway" && (
                        <>
                          <h4 className="mb-4 text-secondary">Subway Lines</h4>

                          <BootstrapSearchBar
                            onSearch={(query) => {
                              // Handle search logic here
                              console.log("Search query:", query);
                            }}
                            placeholder="Search here......"
                            autoFocus={true}
                          />
                          <div
                            style={{
                              width: "280px",
                            }}
                            className="row"
                          >
                            <div className="col-12">
                              <div className="list-group list-group-flush">
                                {sortOptions.map((line) => (
                                  <label
                                    key={line}
                                    className="list-group-item fs-4 text-secondary"
                                  >
                                    <input
                                      className="form-check-input rounded-5 custom-yellow me-2"
                                      type="checkbox"
                                      checked={selectedLines.includes(line)} // ✅ this is the fix
                                      onChange={() => {
                                        setSelectedLines((prev) =>
                                          prev.includes(line)
                                            ? prev.filter((l) => l !== line)
                                            : [...prev, line]
                                        );
                                      }}
                                    />
                                    {line}
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {filter.id === "availability" && (
                        <div
                          style={{
                            width: "400px",
                            height: "auto",
                          }}
                        >
                          <h5 className="title text-secondary">Availability</h5>
                          <DateRangeFlatpickr />
                        </div>
                      )}

                      {filter.id === "amenities" && (
                        <>
                          <h4 className="mb-4 text-secondary">Amenities</h4>

                          <BootstrapSearchBar
                            onSearch={(query) => {
                              // Handle search logic here
                              console.log("Search query:", query);
                            }}
                            placeholder="Search here......"
                            autoFocus={true}
                          />
                          <div
                            style={{
                              width: "280px",
                            }}
                            className="row"
                          >
                            <div className="col-12">
                              <div className="list-group list-group-flush">
                                {amenitiesWithStatus.map((line) => (
                                  <label
                                    key={line}
                                    className="list-group-item fs-4 text-secondary"
                                  >
                                    <input
                                      className="form-check-input rounded-5 custom-yellow me-2"
                                      type="checkbox"
                                    />
                                    {line.name}
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {filter.id === "petPolicy" && (
                        <>
                          <h4 className="mb-4 text-secondary">Subway Lines</h4>

                          <BootstrapSearchBar
                            onSearch={(query) => {
                              // Handle search logic here
                              console.log("Search query:", query);
                            }}
                            placeholder="Search documents..."
                            autoFocus={true}
                          />
                          <div
                            style={{
                              width: "280px",
                            }}
                            className="row"
                          >
                            <div className="col-12">
                              <div className="list-group list-group-flush">
                                {petPolicyOptions.map((line) => (
                                  <label
                                    key={line}
                                    className="list-group-item fs-4 text-secondary"
                                  >
                                    <input
                                      className="form-check-input rounded-5 custom-yellow me-2"
                                      type="checkbox"
                                    />
                                    {line.label}
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Add other filter dropdowns here */}

                      <div className="d-flex justify-content-end gap-2 mt-3">
                        <button
                          className="bg-transparent"
                          onClick={clearFilter}
                        >
                          <a className="tf-btn  py-2 border style-border px-4 h-75 fs-4 fw-6">
                            Clear
                          </a>
                        </button>
                        <button
                          className="bg-transparent"
                          onClick={() => setActiveFilter(null)}
                        >
                          <a className="tf-btn bg-color-primary py-2 border px-4 h-75 fs-4 fw-6">
                            Apply
                          </a>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
