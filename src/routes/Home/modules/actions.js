import * as constants from './constants'

// ------------------------------------
// Actions
// ------------------------------------

export function updateEmail(email) {
  console.log(`in update email:  ${email}`)
  return {
    type: constants.UPDATE_EMAIL,
    payload: email
  }
}

export function updatePassword(password) {
  console.log(`in update password:  ${password}`)
  return {
    type: constants.UPDATE_PASSWORD,
    payload: password
  }
}

export const actions = {
  updateEmail,
  updatePassword
}