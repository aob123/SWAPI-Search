import React, { useEffect, useState } from 'react';
import './style.css';

import Nav from './Nav.js';
import Search from './Search';
import Movies from './Movies.js';

export default function App() {
  const [movies, setMovies] = useState([]); //State for loaded data (films)
  const [searchTerm, setSearchTerm] = useState(''); //State used in the search component to store search terms
  const [searchResults, setSearchResults] = useState(0);
  const [searchType, setSearchType] = useState('');

  //Get the data from API on first render
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  //Components with props to be rendered
  return (
    <div>
      <Nav />

      <Search
        // searchTerm={searchTerm}
        callback={setSearchTerm}
        searchResults={searchResults}
        movies={movies}
        setSearchType={setSearchType}
      />

      <Movies
        movies={movies}
        searchTerm={searchTerm}
        setSearchResults={setSearchResults}
        searchType={searchType}
      />
    </div>
  );
}
