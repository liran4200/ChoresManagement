import * as constants from './constants'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
  [constants.UPDATE_LOGIN]: (state, action) => {
    let login = action.login
    return {...state,login}
  },
  [constants.UPDATE_EMAIL]: (state, action) => {
    let email =action.payload
    return {...state,email}
  },
  [constants.UPDATE_PASSWORD]: (state, action) => {
    let password = action.payload
    return {...state,password}
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  "email":       "",
  "password":    "",
  "isSuccess": false 
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
