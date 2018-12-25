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
  console.log(`in addChore Chore ${JSON.stringify(newChore)}`)
  return {
    type    : constants.ADD_CHORE,
    payload : newChore
  }
}

// Modal Actions
export function showEditModal(chore) {
  console.log('show edit modal')
  return {
    type: constants.SHOW_EDIT_MODAL,
    payload: chore
  }
}

export function showNewModal() {
  console.log('show new modal')
  return {
    type: constants.SHOW_NEW_MODAL,
  }
}

export function hideEditModal() {
  console.log('hide modal')
  return {
    type: constants.HIDE_EDIT_MODAL,
  }
}

export function changeChoreToEditNameField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_NAME,
    payload: val
  }
}
export function changeChoreToEditDescriptionField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_DESCRIPTION,
    payload: val
  }
}
export function changeChoreToEditExpirationField(val) {
  console.log("aaaaaaaaa " + val)
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_EXP_DATE,
    payload: new Date(val)
  }
}

export function changeChoreToEditRecurringField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_RECURRING,
    payload: val
  }
}

export function changeChoreToNewNameField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_NEW_NAME,
    payload: val
  }
}
export function changeChoreToNewDescriptionField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_NEW_DESCRIPTION,
    payload: val
  }
}
export function changeChoreToNewExpirationField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_NEW_EXP_DATE,
    payload: val
  }
}

export function changeChoreToNewRecurringField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_NEW_RECURRING,
    payload: val
  }
}

export const actions = {
  updateChore,
  removeChore,
  addChore,
  showEditModal,
  showNewModal,
  hideEditModal,
  changeChoreToEditNameField,
  changeChoreToEditDescriptionField,
  changeChoreToEditExpirationField,
  changeChoreToEditRecurringField,
  changeChoreToNewNameField,
  changeChoreToNewDescriptionField,
  changeChoreToNewExpirationField,
  changeChoreToNewRecurringField,
}
