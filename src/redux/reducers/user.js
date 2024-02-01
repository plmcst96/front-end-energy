import { DELETE_USER, GET_USER, SET_ADMIN, SET_USER } from '../action/users'

const initialState = {
  content: null,
  users: [],
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((us) => us.uuid !== action.payload),
      }
    case SET_ADMIN: {
      return {
        ...state,
        content: action.payload,
      }
    }
    case SET_USER: {
      return {
        ...state,
        content: action.payload,
      }
    }
    default:
      return state
  }
}

export default userReducers
