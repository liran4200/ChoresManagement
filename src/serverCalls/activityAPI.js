import axios from 'axios'
import { createChore } from '../routes/Chores/modules/reducer'

const BASE_URL = 'http://localhost:8080/playground/activities/'
const USER_PLAY_GROUND = "ChoresManagement"
const PLAY_GROUND = "2019A.yuri"
const TYPE_MarkAsAssigened = "MarkAsAssigened";
const TYPE_MarkAsDone ="MarkAsDone";
const TYPE_MarkAsUnassigened ="MarkAsUnassigened";
const TYPE_GetChoreElements ="GetChoreElements";
const TYPE_GetScoreBoard = "GetScoreBoard"

const postRequest = (addUrl, data) => ({ 
    method: 'post',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    url: BASE_URL + addUrl,
    data: data
})

export const markAsAssigenedToMe = async (id, playerEmail) => {
    try {
        const activity = {
            "type":TYPE_MarkAsAssigened,
            "elementPlayground":PLAY_GROUND,
            "elementId":id,
            "playerPlayground":USER_PLAY_GROUND,
            "playerEmail":playerEmail,
            "attributes": {}
        }
        const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))    
    } catch (error) {
        console.log("error in markAsAssigenedToMe call")
        console.log(error)
        console.log(JSON.stringify(error))
        throw "an error as occured in marking this chore as assigened to you"
    }
}

export const markAsDone = async (id, playerEmail) => {
    try {
        const activity = {
            "type":TYPE_MarkAsDone,
            "elementPlayground":PLAY_GROUND,
            "elementId":id,
            "playerPlayground":USER_PLAY_GROUND,
            "playerEmail":playerEmail,
            "attributes": {}
        }
        const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))
    } catch (error) {
        console.log("error in markAsDone call")
        console.log(error)
        console.log(JSON.stringify(error))
        throw "an error as occured in marking this chore as done"
    }
}

export const markAsUnassigene = async (id, playerEmail) => {
    try {
        const activity = {
            "type":TYPE_MarkAsUnassigened,
            "elementPlayground":PLAY_GROUND,
            "elementId":id,
            "playerPlayground":USER_PLAY_GROUND,
            "playerEmail":playerEmail,
            "attributes": {}
        }
        const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))    
    } catch (error) {
        console.log("error in markAsUnassigene call")
        console.log(error)
        console.log(JSON.stringify(error))
        throw "an error as occured in marking this chore as Unassigened"
    }
}

export const getChoreList = async (playerEmail) => {
    try {
        const activity = {
            "type":TYPE_GetChoreElements,
        }
        const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))
        console.log(JSON.stringify(res))
        let arrayToReturn = res.data
        arrayToReturn = arrayToReturn.map(
            (chore) => {
                    return (
                        createChore(
                            chore.id,
                            chore.name,
                            chore.attributes.Description,
                            new Date(chore.creationDate),
                            new Date(chore.expirationDate),
                            (chore.attributes["Assigned to"]=="") ? "":chore.attributes["Assigned to"].split('$$')[1],
                            chore.attributes.IS_RECURRING,
                            chore.attributes.Score
                        )
                    )
                }
        )
        return arrayToReturn
    } catch (error) {
        throw `error getting chores ${error}`
    }
}

export const getUserList = async (playerEmail) => {
    try {
        const activity = {
            "type":TYPE_GetScoreBoard,
        }
        const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))
        let listOfUsers =Object.keys(res.data.attributes)
        const toR = listOfUsers.map(user => ({"username": user, "score": res.data.attributes[user]}))
        return toR
    } catch (error) {
        throw `error getting users and scores ${error}`
    }
}

export const addNewChore = async (playerEmail, name, expirationDate, score, isRecurring, description) => {
    const activity = {
        "type": "AddChore",
        "elementPlayground": PLAY_GROUND,
        "attributes": {
            "chore": {
                "name": name,
                "type": "chore",
                "expirationDate": expirationDate,
                "x": "0.0",
                "y": "0.0",
                "attributes": {
                    "Score": score,
                    "Description": description,
                    "IS_RECURRING": isRecurring,
                    "Assigned to": ""
                }
            }
        }
    }
    const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))
    console.log(JSON.stringify(res))
    return {
        "id": res.data.id,
        "name": res.data.name,
        "description": res.data.attributes.Description,
        "createDate": new Date(res.data.creationDate),
        "expirationDate": new Date(res.data.expirationDate),
        "roommateName": res.data.attributes["Assigned to"],
        "isRecurring": res.data.attributes.IS_RECURRING,
        "score": res.data.attributes.Score,
    }
}

export const editChore = async (playerEmail, id, name, expirationDate, score, description, isRecurring, assigened) => {
    const activity = {
        "type": "EditChore",
        "playground": PLAY_GROUND,
        "elementId": id,
        "elementPlayground": PLAY_GROUND,
        "attributes": {
            "chore": {
                "name": name,
                "type": "chore",
                "expirationDate": expirationDate,
                "attributes": {
                    "Score": score,
                    "Description": description,
                    "IS_RECURRING": isRecurring,
                    "Assigned to": `${USER_PLAY_GROUND}$$${assigened}`
                }
            }
        }
    }
    const res = await axios(postRequest(`${USER_PLAY_GROUND}/${playerEmail}`,activity))
    console.log("in edit res is")
    console.log(JSON.stringify(res))
    return {
        "id": res.data.id,
        "name": res.data.name,
        "description": res.data.attributes.Description,
        "createDate": new Date(res.data.creationDate),
        "expirationDate": new Date(res.data.expirationDate),
        "roommateName": res.data.attributes["Assigned to"],
        "isRecurring": res.data.attributes.IS_RECURRING,
        "score": res.data.attributes.Score,
    }
}