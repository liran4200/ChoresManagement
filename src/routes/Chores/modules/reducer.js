import * as constants from './constants'
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
        let showEditModal = true;
        let choreToEdit = state.choresList.filter((chore)=>chore.id === action.payload)
        console.log(`chore to edit is ${JSON.stringify(choreToEdit)}`)  
        return {
            ...state,
            shouldShowEditChoreModal: showEditModal,
            choreToEdit: choreToEdit[0]
        }
    },
    [constants.HIDE_EDIT_MODAL]    : (state, action) => {
        console.log("close")
        let showEditModal = false;
            return {
            ...state,
            shouldShowEditChoreModal: showEditModal
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
            "id":               "1000",
            "name":             "Garbge",
            "description": "    Throwing away garbge every day",
            "createDate":       new Date("2018-12-15"),
            "expirationDate":   new Date("2018-12-16"),
            "roommateName":     constants.UNASSIGNED_CHORE,
            "isRecurring":      true
        },
        {
            "id":               "1001",
            "name":             "Kitchen",
            "description":      "Cleaning all the kitchen",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-6"),
            "roommateName":     constants.UNASSIGNED_CHORE,
            "isRecurring":      false
        },
        {
            "id":               "1002",
            "name":             "Clean TV in living room",
            "description":      "Clean dast on TV with special metrial",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-14"),
            "roommateName":     "Liran Yehudar",
            "isRecurring":      false
        },
        {
            "id":               "1003",
            "name":             "Clean Nir room",
            "description":      "Cleaning desk",
            "createDate":       new Date("2018-12-4"),
            "expirationDate":   new Date("2018-12-15"),
            "roommateName":     "Nir Finz",
            "isRecurring":      false
        }
    ],
    shouldShowEditChoreModal: false,
    choreToEdit: {}
}

export default function choreReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
