import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Movies = ({ searchTerm }) => {
    console.log(searchTerm);
    if (!searchTerm) searchTerm = 'Batman';
    const apiKey = '9c0c0fe114b4961e936a7d798ff5f014';
    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}&language=en-US&page=1`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [searchTerm]);

    const fetchMovies = async () => {
        const data = await fetch(movieUrl);
        const movies = await data.json();
        setMovies(movies.results)
    }

    return (
      <div className="App">
        <h1>Movies</h1>
        <div className="popular-movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    )
}

export default Movies;