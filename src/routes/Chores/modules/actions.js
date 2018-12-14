import * as constants from './constants'

// ------------------------------------
// Actions
// ------------------------------------
export function updateChore (newChore) {
  console.log(`in Update Chore ${JSON.stringify(newChore)}`)
  return {
    type    : constants.UPDATE_CHORE,
    payload : newChore
  }
}

export function removeChore(chore) {
  console.log(`in modify chore status ${JSON.stringify(chore)}`)
  return {
    type: constants.REMOVE_CHORE,
    payload: chore
  }
}

export const actions = {
  updateChore,
  removeChore
}
