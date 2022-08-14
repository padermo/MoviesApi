import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from '../redux/action'
import '../stylesheets/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  const dispatch = useDispatch()

  const [input, setInput] = useState("")

  function onChange(e) {
    setInput(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(getMovies(input))
  }

  return (
    <div className="contenedor-search">
      <form onSubmit={onSubmit}>
        <div className='border-search'>
          <input className='input input-text' type="text" placeholder="Search Movie..." onChange={onChange} />
          <button className='btn-icon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} type="submit" className='search-icon' onClick={onSubmit} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar