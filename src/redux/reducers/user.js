import { DELETE_USER, GET_USER } from '../action/users'

const initialState = {
  content: null,
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        content: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        content: state.content.filter((us) => us.uuid !== action.payload),
      }
    default:
      return state
  }
}

export default userReducers
