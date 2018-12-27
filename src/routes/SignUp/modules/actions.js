import * as constants from './constants'

// ------------------------------------
// Actions
// ------------------------------------

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

export const actions = {
  changeUserNameField,
  changePasswardConfField,
  changePasswardField,
}
