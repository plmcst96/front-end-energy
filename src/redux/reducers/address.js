import {
  DELETE_ADDRESS,
  GET_ADDRESS,
  POST_ADDRESS,
  PUT_ADDRESS,
} from '../action'

const initialState = {
  content: null,
  list: [],
  updateAdress: '',
}
const addressReduces = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADDRESS:
      return {
        ...state,
        content: action.payload,
      }
    case GET_ADDRESS:
      return {
        ...state,
        list: action.payload,
      }
    case DELETE_ADDRESS:
      return {
        ...state,
        list: state.list.filter((add) => add.uuid !== action.payload),
      }
    case PUT_ADDRESS:
      return {
        ...state,
        updateAdress: action.payload,
      }
    default:
      return state
  }
}
export default addressReduces
