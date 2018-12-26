import * as constants from './constants'

// ------------------------------------
// Actions
// ------------------------------------

export function userSignUpRequest(newUser) {
    return {
      type    : constants.SIGN_UP_REQUEST,
      payload : newUser
    }
}

export function changePasswardField(newUser) {
  return {
    type    : constants.CHANGE_PASSWARD_FIELD,
    payload : newUser
  }
}

export function changePasswardConfField(newUser) {
  return {
    type    : constants.CHANGE_PASSWARD_CONF_FIELD,
    payload : newUser
  }
}

export function changeUserNameField(newUser) {
  return {
    type    : constants.CHANGE_USRNAME_FIELD,
    payload : newUser
  }
}

export function addScoreToUser(val) {
  return {
    type    : constants.ADD_SCORE_TO_USER,
    payload : val
  }
}

export const actions = {
  userSignUpRequest,
  changeUserNameField,
  changePasswardConfField,
  changePasswardField,
}
