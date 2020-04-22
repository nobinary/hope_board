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

  export const postNote = async (note) => {
    console.log(note)
    // const noteData = {
    //     user_id: note[0].user_id,
    //     content: note[0].content,
    // }  
	try {
		const resp = await Axios.post(`${Api}/notes`, note)
		return resp
	} catch (error) {
		throw error
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
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}





  