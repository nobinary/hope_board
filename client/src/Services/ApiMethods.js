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

  // export const fetchMyFavorites = async (userID) => {
  //   try {
  //   const notes = await Axios.get(`'${Api}/mine/${userID}/favorites`)
  //   return notes
  //   } catch (error) {
  //     console.log("Error: ", error)
  //   }
  // }



  