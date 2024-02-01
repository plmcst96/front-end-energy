import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/register";
import addressReduces from "../reducers/address";

const bigReducer = combineReducers({
  register: registerReducer,
  address : addressReduces,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
