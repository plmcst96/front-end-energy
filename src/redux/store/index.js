import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/register";
import clientReducer from "../reducers/client";

const bigReducer = combineReducers({
  register: registerReducer,
  client: clientReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
