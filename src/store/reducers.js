import { combineReducers } from 'redux'
import choreReducer from '../routes/Chores/modules/reducer'
import signUpReducer from '../routes/SignUp/modules/reducer'
import homeReducer from '../routes/Home/modules/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    chores: choreReducer,
    signUp: signUpReducer,
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
