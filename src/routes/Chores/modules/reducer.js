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
    let choresList = state.choresList.filter((chore)=>(chore.id != action.payload.id))
    console.log(`the new array after removed is ${JSON.stringify(choresList)}`)
    let toReturn = {...state,choresList}
    console.log(`the new toReturn is ${JSON.stringify(toReturn)}`)
    return {...state,choresList}
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
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-20"),
            "roommateName":     constants.UNASSIGNED_CHORE
        },
        {
            "id":               "1001",
            "name":             "Kitchen",
            "description":      "Cleaning all the kitchen",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-6"),
            "roommateName":     constants.UNASSIGNED_CHORE
        },
        {
            "id":               "1002",
            "name":             "Clean TV in living room",
            "description":      "Clean dast on TV with special metrial",
            "createDate":       new Date("2018-12-3"),
            "expirationDate":   new Date("2018-12-14"),
            "roommateName":     "Liran Yehudar"
        },
        {
            "id":               "1003",
            "name":             "Clean Nir room",
            "description":      "Cleaning desk",
            "createDate":       new Date("2018-12-4"),
            "expirationDate":   new Date("2018-12-15"),
            "roommateName":     "Nir Finz"
        }
    ],
}

export default function choreReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
