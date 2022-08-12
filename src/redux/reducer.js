import { GET_MOVIES, ADD_FAVORITES, REMOVE_FAVORITES } from "./action";

const initialState = {
  movies: [],
  favorites: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(id => id.id !== action.payload)
      }
    default:
      return state
  }
}