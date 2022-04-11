import React, { useState, useEffect } from 'react';

function Search({ callback, searchResults, movies, setSearchType }) {
  const [searchOption, setSearchOption] = useState('title');
  const [searchText, setSearchText] = useState(''); //Stores the search term which is entered in the input (search bar)
  // console.log('SEARCH: ', searchResults);

  //Sets value of searchText to the search term entered in the input (search bar)
  function updateSearchText(event) {
    setSearchText(event.target.value);
    // console.log(searchOption);
  }

  function updateSearchOption(event) {
    setSearchOption(event.target.value);
  }

  //Sets the state "setSearchTerm" in App.js to this components searchState.
  useEffect(() => {
    callback(searchText);
    setSearchType(searchOption);
  }, [searchText]);

  //Seach section
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={updateSearchText} //Calls function on each keystroke (change)
      />
      <div className="searchOption">
        {/* <label for="searchOptions"> Search by; </label> */}
        <select
          name="searchOptions"
          id="searchOptions"
          onChange={updateSearchOption}
        >
          <option disabled selected>
            Search by...
          </option>
          <option value="title">Title</option>
          <option value="producer">Producer</option>
          <option value="description">Description</option>
        </select>
      </div>
      <p>
        Showing: {searchResults} of {movies.length} episodes{' '}
        {/*  Shows the user how many movies are being displayed */}
      </p>
    </div>
  );
}

export default Search;
