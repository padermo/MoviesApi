import React from 'react'
import '../stylesheets/Movie.css'
import { useDispatch } from 'react-redux'
import { addFavorites } from '../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

function Movie({ id, name, image, year }) {
  const dispatch = useDispatch()

  function addFav() {
    dispatch(addFavorites({
      id: id,
      name: name,
      image: image
    }))
  }

  return (
    <div className='contenedor-movie'>
      <div className="contenedor-interno-movie">
        <div className="interno-movie">
          <img className='img-movie' src={image} alt={`Imagen de ${name}`} />
          <button onClick={addFav} className='btn-fav-movie' >
            <FontAwesomeIcon icon={faStar} className='icon-star' />
          </button>
          <div className='year-movie'>
            <h3>{year}</h3>
          </div>
        </div>
        <div className="interno-data">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default Movie