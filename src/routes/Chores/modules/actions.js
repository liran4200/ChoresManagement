import * as constants from './constants'
import { getUserList } from '../../../serverCalls/activityAPI'
import { getChoreList } from '../../../serverCalls/choreAPI'

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserListAction(usersList) {
  console.log(`im in updateUserListAction usersList is ${usersList}`)
  return {
    type: constants.UPDATE_USER_LIST,
    payload: usersList
  }
}

export function updateChoreListAction(ChoreList) {
  console.log(`im in updateChoreListAction ChoreList is ${ChoreList}`)
  return {
    type: constants.UPDATE_CHORE_LIST,
    payload: ChoreList
  }
}

export function updateUserList(email) {
  console.log(`im in updateUserList`)
  return async dispatch => {
    const userList = await getUserList(email)
    console.log(`im in userList val is ${userList}`)
    
  }
}

export function updateChoreList(email) {
  console.log(`im in updateChoreList val is ${email}`)
  return async dispatch => {
    const ChoreList = await getChoreList(email)
    console.log(`im in ChoreList val is ${ChoreList}`)
    dispatch(updateChoreListAction(ChoreList))
  }
}

export function loadChorePage(email) {
  return async dispatch => {
    const userList = await getUserList(email)
    console.log(`im in loadChorePage val is ${JSON.stringify(userList)}`)
    dispatch(updateUserListAction(userList))
    const ChoreList = await getChoreList(email)
    console.log(`im in loadChorePage val is ${JSON.stringify(ChoreList)}`)
    dispatch(updateChoreListAction(ChoreList))
    dispatch(changePageLoaded(true))
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
  console.log(`im in changePageLoaded val is ${val}`)
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
  console.log("aaaaaaaaaaaaaaaaaaa")
  console.log(val)
  return {
    type: constants.CHANGE_CHORE_TO_EDIT_SCORE,
    payload: val
  }
}

export const actions = {
  updateUserList,
  updateChoreList,
  loadChorePage,
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
