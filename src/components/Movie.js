import React from 'react'
import './Movie.css'

const Movie = ({movie}) => {
    return (
        <div class='movieTile'>
            <h5 class='movieName'>{movie.title}</h5>
            <img class='movieImg' src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
        </div>
      );
}

export default Movie;