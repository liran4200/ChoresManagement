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

export function removeChore(choreId) {
  console.log(`in remove choreId : ${choreId}`)
  return {
    type: constants.REMOVE_CHORE,
    payload: choreId
  }
}

export function addChore(newChore) {
  console.log(`in Update Chore ${JSON.stringify(newChore)}`)
  return {
    type    : constants.ADD_CHORE,
    payload : newChore
  }
}

export function showEditModal(chore) {
  console.log('show edit modal')
  return {
    type: constants.SHOW_EDIT_MODAL,
    payload: chore
  }
}

export function hideEditModal(chore) {
  console.log('hide modal')
  return {
    type: constants.HIDE_EDIT_MODAL,
    payload: chore
  }
}

export const actions = {
  updateChore,
  removeChore,
  addChore,
  showEditModal,
  hideEditModal,
}
