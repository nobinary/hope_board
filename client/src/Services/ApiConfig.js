import Axios from 'axios'


const Api = 'http://localhost:3000'

export default Api



//ADVANCED:
// const baseURL = process.env.NODE_ENV === 'development' ?
//   'http://localhost:3000' : 'https://daisywheel.herokuapp.com'
// const Api = Axios.create({
//   baseURL: baseURL
// })