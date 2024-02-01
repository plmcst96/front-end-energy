import { GET_ADDRESS, POST_ADDRESS } from "../action"

const initialState = {
    content: null,
    list: []
}
const addressReduces = (state = initialState, action) => {
    switch (action.type) {
        case POST_ADDRESS:
            return {
                ...state,
                content: action.payload
            }
        case GET_ADDRESS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
export default addressReduces
