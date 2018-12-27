import axios from 'axios'
import { createChore } from '../routes/Chores/modules/reducer'

const BASE_URL = 'http://localhost:8080/playground/elements/'
const USER_PLAY_GROUND = "ChoresManagement"
const PLAY_GROUND = "2019A.yuri"
const TYPE = "Chore"

const postRequest = (addUrl, data) => ({
    method: 'post',
    url: BASE_URL + addUrl,
    data: data
})

const putRequest = (addUrl, data) => ({
    method: 'put',
    url: BASE_URL + addUrl,
    data: data
})


const getRequest = (addUrl) => ({
    method: 'get',
    url: BASE_URL + addUrl,
})

export const addNewChore = async (name, creatorEmail, expirationDate, score, isRecurring, description) => {
    const newChore = {
        "name": name,
        "type": TYPE,
        "creatorPlayground": PLAY_GROUND,
        "creatorEmail": creatorEmail,
        "location": { "x": "1.0", "y": "1.0" },
        "expirationDate": expirationDate,
        "attributes": { "SCORE": score , "IS_RECURRING": isRecurring, "DESCRIPTION": description, "ATTRIBUTE_ASSIGNED_TO": ""}
    }
    const res = await axios(postRequest(`/${USER_PLAY_GROUND}/${email}`), newChore)
    return {
        "id": res.id,
        "name": res.name,
        "description": res.attributes.DESCRIPTION,
        "createDate": new Date(res.creationDate),
        "expirationDate": new Date(res.expirationDate),
        "roommateName": res.attributes.ATTRIBUTE_ASSIGNED_TO,
        "isRecurring": res.attributes.IS_RECURRING,
        "score": res.attributes.SCORE,
    }
}

export const editChore = async (id, name, creatorEmail, expirationDate, score, isRecurring, description) => {
    const newChore = {
        "name": name,
        "type": TYPE,
        "creatorPlayground": PLAY_GROUND,
        "creatorEmail": creatorEmail,
        "location": { "x": "1.0", "y": "1.0" },
        "expirationDate": expirationDate,
        "attributes": { "SCORE": score , "IS_RECURRING": isRecurring, "DESCRIPTION": description, "ATTRIBUTE_ASSIGNED_TO": ""}
    }
    const res = await axios(putRequest(`/${USER_PLAY_GROUND}/${email}/${PLAY_GROUND}/${id})`, newChore))
    return {
        "id": res.id,
        "name": res.name,
        "description": res.attributes.DESCRIPTION,
        "createDate": new Date(res.creationDate),
        "expirationDate": new Date(res.expirationDate),
        "roommateName": res.attributes.ATTRIBUTE_ASSIGNED_TO,
        "isRecurring": res.attributes.IS_RECURRING,
        "score": res.attributes.SCORE,
    }
}

export const getChoreList = async (email) => {
    const res = await axios(getRequest(`/${USER_PLAY_GROUND}/${email}/all`))
    return res.map(
        (chore) => {
            if (chore.type === TYPE) {
                return (
                    createChore(
                        chore.id,
                        chore.name,
                        chore.attributes.DESCRIPTION,
                        new Date(chore.creationDate),
                        new Date(chore.expirationDate),
                        chore.creatorEmail,
                        chore.attributes.IS_RECURRING,
                        chore.attributes.SCORE
                    )
                )
            }
        }
    )
}