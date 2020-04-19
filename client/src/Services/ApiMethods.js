import Api from './ApiConfig'
import Axios from 'axios'

export const fetchNotes = async () => {
    try {
    const notes = await Axios.get(`${Api}/notes`)
    return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  export const fetchMyLists = async (userID) => {
    try {
    const notes = await Axios.get(`${Api}/mine/${userID}`)
    console.log(`${Api}/mine/${userID}/notes`)
    return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  export const createLike = async (data) => {
    console.log(data)
    const likeData = {
        user_id: data[0].user_id,
        note_id: data[0].note_id,
    }  
	try {
		const resp = await Axios.post(`${Api}/likes`, likeData)
		return resp
	} catch (error) {
		throw error
    }
}   

///AUTH

export const signUp = async credentials => {
    console.log(credentials)
    try {
        const resp = await Axios.post(`${Api}'/sign-up'`, credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
  console.log(credentials)
  try {
    const resp = await Axios.post(`${Api}'/sign-in'`, credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}





  