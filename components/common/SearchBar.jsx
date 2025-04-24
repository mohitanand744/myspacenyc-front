import { useState, useRef } from "react";

const BootstrapSearchBar = ({
  onSearch,
  placeholder = "Search...",
  autoFocus = false,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    inputRef.current.focus();
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={handleSearch}>
            <div className="input-group shadow-sm">
              <input
                ref={inputRef}
                type="text"
                className="form-control bg-secondary searchbar border-0 rounded-5"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
              />
              {/* 
              {query && (
                <button
                  type="button"
                  className="btn btn-link text-secondary border-0"
                  onClick={handleClear}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x"></i>
                </button>
              )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BootstrapSearchBar;
