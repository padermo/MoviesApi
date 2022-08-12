export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

const apiKey = "79d688bf"

// esta funcion obtiene las peliculas
export function getMovies(name) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
      .then(response => response.json())
      .then(data => dispatch({ type: GET_MOVIES, payload: data.Search }))
  }
}

// esta funcion agrega favoritos
export function addFavorites(payload) {
  return {
    type: ADD_FAVORITES,
    payload
  }
}

// esta funcion elimina favoritos
export function removeFavorites(payload) {
  return {
    type: REMOVE_FAVORITES,
    payload
  }
}