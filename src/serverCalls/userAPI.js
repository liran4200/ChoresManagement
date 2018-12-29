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
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    url: BASE_URL + addUrl,
})

export const registerUser = async (email,password)=>{
    try{
        const newUser = {
            "userName":email,
            "email":email,
            "avatar":AVATAR,
            "role":ROLE
        }
        const res = await axios(postRequest("",newUser))
        const confirmUser = await axios(getRequest(`/confirm/${res.data.playground}/${res.data.email}/${res.data.code}`))
        return {
            "username":  confirmUser.username,
            "password": password,
            "score":    confirmUser.points
        }
    } catch (error) {
        throw `Error : Failed registering User ${email} because ${error.response.data.message}`
    }
}

export const loginFunc = async (email, password) => {
    try {
        const logedInUser = await axios(getRequest(`/login/${PLAY_GROUND}/${email}/`))
    } catch (error) {
        throw `Error : loggin in with email ${email} failed, try different email/passward or sign Up`
    }
} 