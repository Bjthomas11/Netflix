import React from "react";
import MovieRow from "./components/movie-row/MovieRow";
import requests from "./requests";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="netflix-container">
      <Navbar />
      <Cta />
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeMovieRow
      />
      <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy" fetchUrl={requests.fecthComedyMovies} />
      <MovieRow title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fecthDocumentaries} />
    </div>
  );
}

export default App;
