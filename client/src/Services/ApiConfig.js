import Axios from 'axios'


// const Api = 'http://localhost:3000'

// export default Api

export const JwtToken = () => localStorage.getItem('token') || null;
export const TOKEN_KEY = 'sample.key';

const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'http://hope-board-api.herokuapp.com'

const Api = Axios.create({
  baseURL: apiUrl,
  headers: {
	Authorization: `Bearer ${JwtToken()}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export default Api

//ADVANCED:
// const baseURL = process.env.NODE_ENV === 'development' ?
//   'http://localhost:3000' : 'https://daisywheel.herokuapp.com'
// const Api = Axios.create({
//   baseURL: baseURL
// })