import React from 'react'
import { useSelector } from 'react-redux'
import Movie from './Movie';
import '../stylesheets/Movies.css'

function Movies() {
  const state = useSelector(state => state.movies)

  return (
    <div className='contenedor-movies'>
      {
        state.map(e => (
          <div className='contenedor-movie-movies' key={e.imdbID}>
            <Movie id={e.imdbID} name={e.Title} image={e.Poster} year={e.Year} />
          </div>
        ))
      }
    </div>
  )
}

export default Movies