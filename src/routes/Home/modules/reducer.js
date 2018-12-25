import * as constants from './constants'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
  [constants.UPDATE_EMAIL]: (state, action) => {
    return {...state, email: action.payload}
  },
  [constants.UPDATE_PASSWORD]: (state, action) => {
    return {...state, password: action.payload}
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  "email":       "",
  "password":    "",
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
