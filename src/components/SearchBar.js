import React, { useState } from 'react'
import Movies from '../pages/Movies';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [movieQuery, setMovieQuery] = useState('spider');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

      const handleSearch = (e) => {
          console.log(searchInput);
          e.preventDefault();
          if (searchInput.length > 3) {
              setMovieQuery(searchInput);
          }
      }

    return (
        <>
            <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
            <button onClick={handleSearch}>Search</button>
            <Movies searchTerm={movieQuery}></Movies>
        </>
   );
}

export default SearchBar;