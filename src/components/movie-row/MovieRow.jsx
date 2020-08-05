import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./MovieRow.scss";

const MovieRow = ({ title, fetchUrl, isLargeMovieRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      // console.log(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-images">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeMovieRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`movie-image ${
              isLargeMovieRow && "movie-image-large"
            } ?`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
