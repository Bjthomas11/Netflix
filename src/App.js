import React from "react";
import MovieRow from "./components/movie-row/MovieRow";
import requests from "./requests";

// api key: 305cf5d9dcc3ea93b3a6411ba033664b
// firebase site NEEDS DEPLOY AFTER: https://netflix-88dd8.web.app/

function App() {
  return (
    <div>
      <MovieRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <MovieRow title="Now Trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
