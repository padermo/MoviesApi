import React from 'react'
import NavBar from './NavBar'
import Movies from './Movies'
import Favorites from './Favorites'
import Footer from './Footer'
import '../stylesheets/App.css'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className='contenedor-app'>
      <div className='interno-app-nav'>
      <NavBar />
      <Route exact path='/' render={()=> <Movies />}/>
      <Route path='/favorites' render={() => <Favorites />} />
      <Footer />
      </div>
    </div>
  )
}

export default App