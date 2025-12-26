import React from "react";

const Display = ({ Showmovies, deleteMovie, toggleMovies }) => {
  return (
    <div className="watchlist-container">
      <h2>🎬 WatchList</h2>
      <h3>Movies count : {Showmovies.length}</h3>

      {Showmovies.length === 0 ? (
        <p>No movies added yet</p>
      ) : (
        Showmovies.map((movie) => (
          <div className="watchlist-movie" key={movie.id}>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p> {movie.ratings}</p>
            </div>


            <button
              className="delete-btn"
              onClick={() => deleteMovie(movie.id)}
            >
              ❌ Delete
            </button>

            <button
              className="watched-btn"
              onClick={() => toggleMovies(movie.id)}
            >
              {movie.watched ? "✅ Watched" : "👀 Unwatched"}
            </button>


          </div>
        ))
      )}
    </div>
  );
};

export default Display;
