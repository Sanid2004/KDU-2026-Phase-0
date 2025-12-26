import React, { useState } from "react";

const Search = ({ movies }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredMovies = movies.filter((movie) => {
    if (!query.trim()) return false;

    const title = movie.title.toLowerCase();
    const search = query.trim().toLowerCase();

    return title.includes(search);
  });

  return (
    <div className="search-page">
      <h2>🔍 Search Movies</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />

        {showDropdown && query && (
          <div className="search-dropdown">
            {filteredMovies.length === 0 ? (
              <p className="no-result">No results found</p>
            ) : (
              filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="dropdown-item"
                  onMouseDown={() => {
                    setQuery(movie.title);
                    setShowDropdown(false);
                  }}
                >
                  <span className="movie-title">{movie.title}</span>
                  <span className="movie-rating">{movie.ratings}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
