import * as constants from './constants'
import uuid from 'uuid'
// ------------------------------------
// Action Handlers
// ------------------------------------
export const createChore = (id, name, description, createDate, expirationDate, roommateName, isRecurring, score)=> ({
  "id": id,
  "name": name,
  "description": description,
  "createDate": createDate,
  "expirationDate": expirationDate,
  "roommateName": roommateName,
  "isRecurring": isRecurring,
  "score": score,
})

const ACTION_HANDLERS = {
  [constants.UPDATE_CHORE_LIST]: (state, action) => {
    return { ...state, choresList: action.payload }
  },
  [constants.UPDATE_USER_LIST]: (state, action) => {
    return { ...state, userList: action.payload }
  },
  [constants.SHOW_EDIT_MODAL]: (state, action) => {
    let choreToEdit = state.choresList.filter((chore) => chore.id === action.payload)
    console.log(`chore to edit is ${JSON.stringify(choreToEdit)}`)
    return {
      ...state,
      shouldShowEditChoreModal: true,
      choreToEdit: choreToEdit[0]
    }
  },
  [constants.SHOW_NEW_MODAL]: (state, action) => {
    let choreToEdit = createChore(
      "newChore",
      "",
      "",
      new Date(),
      new Date(),
      constants.UNASSIGNED_CHORE,
      false,
      0,
    )
    return {
      ...state,
      shouldShowEditChoreModal: true,
      choreToEdit: choreToEdit
    }
  },
  [constants.HIDE_EDIT_MODAL]: (state, action) => {
    return {
      ...state, shouldShowEditChoreModal: false
    }
  },
  [constants.CHANGE_CHORE_PAGE_LOADED]: (state, action) => {
    return {
      ...state, isPageLoaded: action.payload
    }
  },
  [constants.CHANGE_CHORE_TO_EDIT_NAME]: (state, action) => {
    return { ...state, choreToEdit: { ...state.choreToEdit, "name": action.payload } }
  },
  [constants.CHANGE_CHORE_TO_EDIT_DESCRIPTION]: (state, action) => {
    return { ...state, choreToEdit: { ...state.choreToEdit, "description": action.payload } }
  },
  [constants.CHANGE_CHORE_TO_EDIT_EXP_DATE]: (state, action) => {
    return { ...state, choreToEdit: { ...state.choreToEdit, "expirationDate": action.payload } }
  },
  [constants.CHANGE_CHORE_TO_EDIT_RECURRING]: (state, action) => {
    return { ...state, choreToEdit: { ...state.choreToEdit, "isRecurring": action.payload } }
  },
  [constants.CHANGE_CHORE_TO_EDIT_RECURRING]: (state, action) => {
    return { ...state, choreToEdit: { ...state.choreToEdit, "score": action.payload } }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  choresList:
    [
      {
        "id": uuid(),
        "name": "Garbge",
        "description": "    Throwing away garbge every day",
        "createDate": new Date("2018-12-15"),
        "expirationDate": new Date("2018-12-16"),
        "roommateName": constants.UNASSIGNED_CHORE,
        "isRecurring": true,
        "score": 10,
      },
      {
        "id": uuid(),
        "name": "Kitchen",
        "description": "Cleaning all the kitchen",
        "createDate": new Date("2018-12-3"),
        "expirationDate": new Date("2018-12-6"),
        "roommateName": "dudu@gmail.com",
        "isRecurring": false,
        "score": 10,
      },
      {
        "id": uuid(),
        "name": "Clean TV in living room",
        "description": "Clean dast on TV with special metrial",
        "createDate": new Date("2018-12-3"),
        "expirationDate": new Date("2018-12-14"),
        "roommateName": "gal@gmail.com",
        "isRecurring": false,
        "score": 10,
      },
      {
        "id": uuid(),
        "name": "Clean Nir room",
        "description": "Cleaning desk",
        "createDate": new Date("2018-12-4"),
        "expirationDate": new Date("2018-12-15"),
        "roommateName": "gal@gmail.com",
        "isRecurring": false,
        "score": 10,
      }
    ],
  userList: null,
  shouldShowEditChoreModal: false,
  choreToEdit: {},
  isPageLoaded: false,
}

export default function choreReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
