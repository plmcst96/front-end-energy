import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerReducer from '../reducers/register'
import addressReduces from '../reducers/address'
import provinceReducer from '../reducers/province'
import townReducer from '../reducers/town'
import clientReducer from '../reducers/client'

const bigReducer = combineReducers({
  register: registerReducer,
  address: addressReduces,
  province: provinceReducer,
  town: townReducer,
  client: clientReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
