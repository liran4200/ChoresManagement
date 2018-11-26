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

export const actions = {
  updateChore
}
