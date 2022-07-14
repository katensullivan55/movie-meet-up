import React, { useState } from 'react'
import './SearchBar.css';
import Movies from '../pages/Movies';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [movieQuery, setMovieQuery] = useState('batman');

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
        <div>
            <div class='userSearch'>
                <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
                <button onClick={handleSearch} >Search</button>
            </div>
            <Movies searchTerm={movieQuery}></Movies>
        </div>
   );
}

export default SearchBar;