import React, { useState, useEffect } from 'react';

function Movies({ movies, searchTerm, setSearchResults, searchType }) {
  let i = 0; //Initializes counter for movies, used to display total search results in Search.js
  useEffect(() => {
    setSearchResults(i);
  });
  return (
    <div className="moviesContainer">
      {/* {console.log('SEARCH TYPE: ', searchType)} */}
      {movies
        .filter((movie) => {
          //Return search results based on searchType (default is by title)

          if (searchTerm == '') {
            return movie;
          } else if (
            searchType == 'title' &&
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return movie;
          } else if (
            searchType == 'producer' &&
            movie.producer.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return movie;
          } else if (
            searchType == 'description' &&
            movie.opening_crawl.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return movie;
          }
        })
        .map((movie) => {
          //Iterate the movies and apply template to each movie
          {
            i++; //Update counter for each movie
          }
          return (
            //Movie template
            <div className="movie" key={movie.episode_id}>
              <h1> {movie.title} </h1>
              <h2>Episode {movie.episode_id} </h2>
              <p> Release Date: {movie.release_date} </p>
              <p> Director: {movie.director} </p>
              <p> Producer: {movie.producer} </p>
              <p> Total starships: {movie.starships.length} </p>
              <p> Total characters: {movie.characters.length} </p>
              <p> {movie.opening_crawl} </p>
            </div>
          );
        })}
    </div>
  );
}

export default Movies;
