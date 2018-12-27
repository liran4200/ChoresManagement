import axios from 'axios'

const BASE_URL = 'http://localhost:8080/playground/users/'
const ROLE = "manager"
const AVATAR = "avatar"
const PLAY_GROUND = "ChoresManagement"

const postRequest = (addUrl, data) => ({ 
    method: 'post',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    url: BASE_URL + addUrl,
    data: data
})

const getRequest = (addUrl, data) => ({ 
    method: 'get',
    url: BASE_URL + addUrl,
})

export const registerUser = async (email,password)=>{
    const newUser = {
        "userName":email,
        "email":email,
        "avatar":AVATAR,
        "role":ROLE
    }
    const res = await axios(postRequest("",newUser))
    const confirmUser = await axios(getRequest(`/confirm/${res.playground}/${res.email}/${res.code}`))
    return {
        "username":  confirmUser.username,
        "password": password,
        "score":    confirmUser.points
    }
}

export const loginFunc = async (email, password) => {
    const logedInUser = await axios(getRequest(`/login/${PLAY_GROUND}/${email}`))
    return 
} 