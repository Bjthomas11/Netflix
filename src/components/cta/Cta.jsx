import React, { useState, useEffect } from "react";
import requests from "../../requests";
import axios from "../../axios";

import "./Cta.scss";

const Cta = () => {
  const [movie, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  //   console.log(movie);
  return (
    <header
      className="cta-container"
      style={{
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="cta-content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="cta-buttons">
          <button className="cta-button">Play</button>
          <button className="cta-button">My List</button>
        </div>
        <h3 className="cta-description">{movie.overview}</h3>
      </div>
    </header>
  );
};

export default Cta;
