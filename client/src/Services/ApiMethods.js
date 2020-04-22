import Api from './ApiConfig'
import Axios from 'axios'

export const fetchNotes = async () => {
    try {
      const notes = await Api.get(`/notes`)
      return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  export const fetchMyLists = async (userID) => {
    try {
    const notes = await Api.get(`/mine/${userID}`)
    console.log(`${Api}/mine/${userID}/notes`)
    return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  export const createLike = async (data) => {
    // console.log(data)
    // const likeData = {
    //     user_id: data[0].user_id,
    //     note_id: data[0].note_id,
    // }  
	try {
		const resp = await Api.post(`/likes`, data)
		return resp
	} catch (error) {
		throw error
    }
}   

///AUTH

export const signUp = async credentials => {
    console.log(credentials)
    try {
        const resp = await Api.post(`users/register`, credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
  console.log('signInUser credentials', credentials)
  try {
    const resp = await Api.post(`users/login`, credentials)
    await localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    return {error: error}
  }
}





  