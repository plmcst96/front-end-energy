import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/register";


const bigReducer = combineReducers({
    register: registerReducer
})

const store = configureStore({
    reducer: bigReducer,
})

export default store