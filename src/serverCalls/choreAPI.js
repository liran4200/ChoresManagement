import axios from 'axios'

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