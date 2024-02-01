import { POST_ADDRESS } from "../action"

const inizialState ={
    content : null
}
 const addressReduces = (state=inizialState, action) => {
    switch (action.type) {
        case POST_ADDRESS :
            return {...state,
            content:action.payload}
            default :
             return state
    }
 }
 export default addressReduces
