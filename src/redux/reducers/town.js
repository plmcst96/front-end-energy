import { GET_TOWN } from '../action'

const inizialState = {
  content: null,
}

const townReducer = (state = inizialState, action) => {
  switch (action.type) {
    case GET_TOWN:
      return { ...state, content: action.payload }
    default:
      return state
  }
}

export default townReducer
