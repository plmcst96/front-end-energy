import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerReducer from '../reducers/register'
import addressReduces from '../reducers/address'
import provinceReducer from '../reducers/province'

const bigReducer = combineReducers({
  register: registerReducer,
  address: addressReduces,
  province: provinceReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
