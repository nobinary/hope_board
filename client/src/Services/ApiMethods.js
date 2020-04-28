import Api from './ApiConfig'
import { createApi, changeHeader } from './ApiConfig'

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
	try {
		const resp = await Api.post(`/notes`, note)
		return resp
	} catch (error) {
		throw error
    }
}   

export const deleteNote = async (note) => {
  console.log(note)
try {
  const resp = await Api.delete(`/notes/${note.note_id}`)
  return resp
} catch (error) {
  throw error
  }
}  

  export const fetchMyLists = async (userID) => {
    try {
    const notes = await Api.get(`/mine/${userID}`)
    return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  export const createLike = async (data) => {
	try {
		const resp = await Api.post(`/likes`, data)
		return resp
	} catch (error) {
		throw error
    }
}   

  export const deleteLike = async (data) => {
    try {
      const resp = await Api.post(`/likes/delete`, data)
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
    // createApi();
    changeHeader();
    return resp.data
  } catch (error) {
    return {error: error}
  }
}





  
