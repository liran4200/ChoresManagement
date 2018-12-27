import axios from 'axios'

const BASE_URL = 'http://localhost:8080/playground/activities/'
const USER_PLAY_GROUND = "ChoresManagement"
const PLAY_GROUND = "2019A.yuri"
const TYPE_MarkAsAssigened = "MarkAsAssigened";
const TYPE_MarkAsDone ="MarkAsDone";
const TYPE_MarkAsUnassigened ="MarkAsUnassigened";
const TYPE_GetMessageBord ="GetMessageBord";

const postRequest = (addUrl, data) => ({
    method: 'post',
    url: BASE_URL + addUrl,
    data: data
})

export const markAsAssigenedToMe = async (id, playerEmail) => {
    const activity = {
        "type":TYPE_MarkAsAssigened,
        "elementPlayground":PLAY_GROUND,
        "elementId":id,
        "playerPlayground":USER_PLAY_GROUND,
        "playerEmail":playerEmail,
        "attributes": {}
    }
    const res = await axios(postRequest(`/${USER_PLAY_GROUND}/${playerEmail}`), activity)
}

export const markAsDone = async (id, playerEmail) => {
    const activity = {
        "type":TYPE_MarkAsDone,
        "elementPlayground":PLAY_GROUND,
        "elementId":id,
        "playerPlayground":USER_PLAY_GROUND,
        "playerEmail":playerEmail,
        "attributes": {}
    }
    const res = await axios(postRequest(`/${USER_PLAY_GROUND}/${playerEmail}`), activity)
}

export const markAsUnassigene = async (id, playerEmail) => {
    const activity = {
        "type":TYPE_MarkAsUnassigened,
        "elementPlayground":PLAY_GROUND,
        "elementId":id,
        "playerPlayground":USER_PLAY_GROUND,
        "playerEmail":playerEmail,
        "attributes": {}
    }
    const res = await axios(postRequest(`/${USER_PLAY_GROUND}/${playerEmail}`), activity)
}

export const getUserList = async () => {
    return ([
        {
            //add to each user: score.
            "username": "gal@gmail.com",
            "password": 1234,
            "score":    100,             
        },
        {
            "username": "dudu@gmail.com",
            "password": 1234,
            "score":    50,             
        },
    ])
}