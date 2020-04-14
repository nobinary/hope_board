// import Api from './ApiConfig'
import Axios from 'axios'

export const fetchNotes = async () => {
    try {
    const notes = await Axios.get('http://localhost:3000/notes')
    return notes
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  