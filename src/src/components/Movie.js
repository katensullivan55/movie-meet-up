import React from 'react'
import './Movie.css'

const Movie = ({movie}) => {
    return (
        <div class='movieTile polaroid'>
            <a href="">
                <h5>{movie.title}</h5>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
            </a>
        </div>
      );
}

export default Movie;