import React from 'react'
import '../stylesheets/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  return (
    <div className='contenedor-footer'>
      <div className="contenedor-interno-footer">
        <div className="interno-uno">
          <h3>Movies</h3>
          <FontAwesomeIcon icon={faCopyright} className='icon-copy'/>
        </div>
        <div className="interno-dos">
          <h3>2022</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer