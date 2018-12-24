import { combineReducers } from 'redux'
import locationReducer from './location'
import choreReducer from '../routes/Chores/modules/reducer'
import signUpReducer from '../routes/SignUp/modules/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    chores: choreReducer,
    signUp: signUpReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
