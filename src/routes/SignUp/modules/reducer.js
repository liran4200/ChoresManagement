import * as constants from './constants'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
    [constants.SIGN_UP_REQUEST]    : (state, action) => {
        let toR=state.users_list
        toR.push(action.payload)
        return {...state,users_list: toR}
    },
    [constants.CHANGE_PASSWARD_FIELD]    : (state, action) => {
        return {...state,password: action.payload}
    },
    [constants.CHANGE_PASSWARD_CONF_FIELD]    : (state, action) => {
    return {...state,passwordConf: action.payload}
    },
    [constants.CHANGE_USRNAME_FIELD]    : (state, action) => {
        return {...state,username: action.payload}
    },
    [constants.ADD_SCORE_TO_USER]    : (state, action) => {
        const username = action.payload.username
        let toR=state.users_list
        toR = toR.map((user)=>{
            if(user.username == username){
                return({...user,"score": user.score + action.payload.score})
            }else{
                return user
            }
        })
        return {...state,users_list: toR}
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
            "username": "gal@gmail.com",
            "password": 1234,
            "score":    100,             
        },
        {
            "username": "dudu@gmail.com",
            "password": 1234,
            "score":    50,             
        },
    ],
    username: "",
    password: "",
    passwordConf: "",
}

export default function signUpReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
