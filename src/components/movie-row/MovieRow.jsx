import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./MovieRow.scss";

const MovieRow = ({ title, fetchUrl }) => {
  // movie state
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

  console.table(movies);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-images">
        {movies.map((movie, id) => (
          <img
            key={id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            className="movie-image"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
