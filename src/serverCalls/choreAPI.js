import axios from 'axios'
import { createChore } from '../routes/Chores/modules/reducer'

const BASE_URL = 'http://localhost:8080/playground/elements/'
const USER_PLAY_GROUND = "ChoresManagement"
const PLAY_GROUND = "2019A.yuri"
const TYPE = "chore"

const postRequest = (addUrl, data) => ({ 
    method: 'post',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    url: BASE_URL + addUrl,
    data: data
})

const getRequest = (addUrl) => ({
    method: 'get',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    url: BASE_URL + addUrl,
})

export const getChoreList = async (email) => {
    const res = await axios(getRequest(`${USER_PLAY_GROUND}/${email}/search/type/chore`))
    let arrayToReturn = res.data
    arrayToReturn = arrayToReturn.filter((chore)=>(chore.attributes.Status != "Done"))
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
}