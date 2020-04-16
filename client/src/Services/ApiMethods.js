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
        user_id: data.user_id,
        note_id: data.note_id,
    }  
	try {
		const resp = await Axios.post(`${Api}/likes`, likeData)
		return resp
	} catch (error) {
		throw error
    }
}   

  // export const fetchMyFavorites = async (userID) => {
  //   try {
  //   const notes = await Axios.get(`'${Api}/mine/${userID}/favorites`)
  //   return notes
  //   } catch (error) {
  //     console.log("Error: ", error)
  //   }
  // }



  