import * as constants from './constants'
import uuid from 'uuid'
// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
  [constants.UPDATE_CHORE]    : (state, action) => {
    let choresList = state.choresList.filter((value)=>(value.id != action.payload.id))
    choresList.push(action.payload)
    console.log(`the new array is ${JSON.stringify(choresList)}`)
    let toReturn = {...state,choresList}
    console.log(`the new toReturn is ${JSON.stringify(toReturn)}`)
    return {...state,choresList}
    },
  [constants.REMOVE_CHORE]    : (state, action) => {
    let choresList = state.choresList.filter((chore)=>(chore.id != action.payload))
    console.log(`the new array after removed is ${JSON.stringify(choresList)}`)
    let toReturn = {...state,choresList}
    console.log(`the new toReturn is ${JSON.stringify(toReturn)}`)
    return {...state,choresList}
    },
  [constants.ADD_CHORE]       : (state, action) => {
    let newChoresList = state.choresList.concat(action.payload)
    console.log(`the new array is ${JSON.stringify(newChoresList)}`)
    let toReturn = {...state,newChoresList}
    console.log(`the new toReturn is ${JSON.stringify(toReturn)}`)
    return {
      ...state,
      choresList: newChoresList}
    },
    [constants.SHOW_EDIT_MODAL]    : (state, action) => {
      let choreToEdit = state.choresList.filter((chore)=>chore.id === action.payload)
      console.log(`chore to edit is ${JSON.stringify(choreToEdit)}`)
      return {
        ...state,
        shouldShowEditChoreModal: true,
        choreToEdit: choreToEdit[0]
      }
    },
    [constants.SHOW_NEW_MODAL]    : (state, action) => {
      let choreToEdit = {
        "id":               uuid(),
        "name":             "",
        "description":      "",
        "createDate":       new Date(),
        "expirationDate":   new Date(),
        "roommateName":     constants.UNASSIGNED_CHORE,
        "isRecurring":      false,
        "score":            0,
      }
      return {
        ...state,
        shouldShowEditChoreModal: true,
        choreToEdit: choreToEdit
      }
    },
    [constants.HIDE_EDIT_MODAL]    : (state, action) => {
       return {
        ...state,
        shouldShowEditChoreModal: false
      }
    },
    [constants.CHANGE_CHORE_TO_EDIT_NAME]    : (state, action) => {
       return {
        ...state,
        choreToEdit: {...state.choreToEdit, "name": action.payload}
      }
    },
    [constants.CHANGE_CHORE_TO_EDIT_DESCRIPTION]    : (state, action) => {
       return {
        ...state,
        choreToEdit: {...state.choreToEdit, "description": action.payload}
      }
    },
    [constants.CHANGE_CHORE_TO_EDIT_EXP_DATE]    : (state, action) => {
       return {
        ...state,
        choreToEdit: {...state.choreToEdit, "expirationDate": action.payload}
      }
    },
    [constants.CHANGE_CHORE_TO_EDIT_RECURRING]    : (state, action) => {
       return {
        ...state,
        choreToEdit: {...state.choreToEdit, "isRecurring": action.payload}
      }
    },
    [constants.CHANGE_CHORE_TO_EDIT_RECURRING]    : (state, action) => {
      return {
       ...state,
       choreToEdit: {...state.choreToEdit, "score": action.payload}
     }
   },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    choresList:
    [
        {
            "id":               uuid(),
            "name":             "Garbge",
            "description": "    Throwing away garbge every day",
            "createDate":       new Date("2018-12-15"),
            "expirationDate":   new Date("2018-12-16"),
            "roommateName":     constants.UNASSIGNED_CHORE,
            "isRecurring":      true,
            "score":            10,
        },
        {
            "id":               uuid(),
            "name":             "Kitchen",
            "description":      "Cleaning all the kitchen",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-6"),
            "roommateName":     "dudu@gmail.com",
            "isRecurring":      false,
            "score":            10,
        },
        {
            "id":               uuid(),
            "name":             "Clean TV in living room",
            "description":      "Clean dast on TV with special metrial",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-14"),
            "roommateName":     "gal@gmail.com",
            "isRecurring":      false,
            "score":            10,
        },
        {
            "id":               uuid(),
            "name":             "Clean Nir room",
            "description":      "Cleaning desk",
            "createDate":       new Date("2018-12-4"),
            "expirationDate":   new Date("2018-12-15"),
            "roommateName":     "gal@gmail.com",
            "isRecurring":      false,
            "score":            10,
        }
    ],
    shouldShowEditChoreModal: false,
    choreToEdit: {}
}

export default function choreReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
