import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorites } from '../redux/action'
import '../stylesheets/Favorites.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

function Favorites() {
  const state = useSelector(state => state.favorites)
  const dispatch = useDispatch()


  console.log('Favorites', state);
  return (
    <div className='contenedor--favorites'>
      {
        state.map(e => (
          <div className='contenedor-interno-fav' key={e.id} >
            <div className="interno-img-fav">
              <img src={e.image} alt={`Imagen de ${e.name}`} />
              <button className='btn-remove-fav'>
                <FontAwesomeIcon icon={faBan} className='icon-trash' onClick={() => dispatch(removeFavorites(e.id))} />
              </button>
            </div>
            <div className="interno-data-fav">
              <h1>{e.name}</h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Favorites