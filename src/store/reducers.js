import { combineReducers } from 'redux'
import locationReducer from './location'
import choreReducer from '../routes/Chores/modules/reducer'
import homeReducer from '../routes/Home/modules/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    chores: choreReducer,
    home: homeReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
