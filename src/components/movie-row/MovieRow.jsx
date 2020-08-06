import React, { useState, useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./MovieRow.scss";

const MovieRow = ({ title, fetchUrl, isLargeMovieRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

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
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MovieRow;
