import { GET_PROVINCE } from '../action'

const inizialState = {
  content: null,
}

const provinceReducer = (state = inizialState, action) => {
  switch (action.type) {
    case GET_PROVINCE:
      return { ...state, content: action.payload }
    default:
      return state
  }
}

export default provinceReducer
