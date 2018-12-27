import * as constants from './constants'
import { getUserList } from '../../../serverCalls/activityAPI'
import { getChoreList } from '../../../serverCalls/choreAPI'

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserListAction(usersList) {
  console.log(`in updateUserListAction ${JSON.stringify(newChore)}`)
  return {
    type: constants.UPDATE_USER_LIST,
    payload: usersList
  }
}

export function updateChoreListAction(usersList) {
  console.log(`in updateChoreListAction ${JSON.stringify(newChore)}`)
  return {
    type: constants.UPDATE_CHORE_LIST,
    payload: usersList
  }
}

export function updateUserList() {
  return dispatch => {
    dispatch(updateUserListAction(getUserList()))
  }
}

export function updateChoreList() {
  return dispatch => {
    dispatch(updateChoreListAction(getChoreList()))
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

export function changePageLoaded(val) {
  return {
    type: constants.CHANGE_CHORE_PAGE_LOADED,
    payload: val
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

export function changeChoreToEditScoreField(val) {
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_SCORE,
    payload: val
  }
}

export const actions = {
  updateUserList,
  updateChoreList,
  showEditModal,
  showNewModal,
  hideEditModal,
  changePageLoaded,
  changeChoreToEditNameField,
  changeChoreToEditDescriptionField,
  changeChoreToEditExpirationField,
  changeChoreToEditRecurringField,
  changeChoreToEditScoreField,
}
