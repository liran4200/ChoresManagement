import * as constants from './constants'

// ------------------------------------
// Actions
// ------------------------------------

export function userSignupRequest(userData) {
    return {
      type    : constants.SIGN_UP_REQUEST,
      payload : userData
    }
}


export const actions = {
  userSignupRequest
}
