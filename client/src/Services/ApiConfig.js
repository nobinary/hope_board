import Axios from 'axios'

export const JwtToken = () => localStorage.getItem('token') || null;

const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'http://hope-board-api.herokuapp.com'

let Api;
export const createApi = () => {
  console.log(`createApi running...`)
  Api = Axios.create({
  baseURL: apiUrl,
  headers: {
	Authorization: `Bearer ${JwtToken()}`,
    'Access-Control-Allow-Origin': '*'
    }
  })
  // console.log(Api.defaults.headers)
}
createApi();

export const changeHeader = () => {
  // console.log(JwtToken());
  Api.defaults.headers['Authorization'] = `Bearer ${JwtToken()}`;
  // console.log(Api.defaults.headers)
}

export default Api

//ADVANCED:
// const baseURL = process.env.NODE_ENV === 'development' ?
//   'http://localhost:3000' : 'https://daisywheel.herokuapp.com'
// const Api = Axios.create({
//   baseURL: baseURL
// })