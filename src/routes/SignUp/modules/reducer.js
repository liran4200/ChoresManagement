import * as constants from './constants'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
    [constants.CHANGE_PASSWARD_FIELD]    : (state, action) => {
        return {...state,password: action.payload}
    },
    [constants.CHANGE_PASSWARD_CONF_FIELD]    : (state, action) => {
    return {...state,passwordConf: action.payload}
    },
    [constants.CHANGE_USRNAME_FIELD]    : (state, action) => {
        return {...state,username: action.payload}
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    username: "",
    password: "",
    passwordConf: "",
}

export default function signUpReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
