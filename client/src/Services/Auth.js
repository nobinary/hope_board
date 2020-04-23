import JWT from 'jsonwebtoken';

let JwtToken = localStorage.getItem('token') || null;
const TOKEN_KEY = 'holocene_slaughter!666'; // this needs to end up protected somehow

const verify = () => {
    try {
        const data = JWT.verify(JwtToken, TOKEN_KEY);
        // console.log('verified data: ', data);
        return data;
    } catch (error) {
        return error;
    }
}
const userData = () => {
    JwtToken = localStorage.getItem('token') || null;
    return verify();
}

export default userData;