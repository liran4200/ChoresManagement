import * as constants from './constants'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
  [constants.SIGN_UP_REQUEST]    : (state, action) => {
    let users_list = state.users_list.filter((value)=>(value.usrname != action.payload.id))
    users_list.push(action.payload)
    console.log(`the new user is ${JSON.stringify(users_list)}`)
    let toReturn = {...state,users_list}
    console.log(`the new toReturn is ${JSON.stringify(toReturn)}`)
    return {...state,users_list}
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    users_list:
    [
        {
            //add to each user: score.
            "usrname":                   "gal@gmail.com",
            "password":                  1234,
        },
        {
            "usrname":                   "dudu@gmail.com",
            "password":                  1234,
        },
    ],
}

export default function signUpReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
