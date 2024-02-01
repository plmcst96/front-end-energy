import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/register";
import addressReduces from "../reducers/address";
import clientReducer from "../reducers/client";

const bigReducer = combineReducers({
  register: registerReducer,
  address: addressReduces,
  client: clientReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
