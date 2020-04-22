import JWT from 'jsonwebtoken';

const JwtToken = localStorage.getItem('token') || null;
const TOKEN_KEY = 'holocene_slaughter!666';
const verify = () => {
    try {
        const data = JWT.verify(JwtToken, TOKEN_KEY);
        console.log('data: ', data);
        return data;
    } catch (error) {
        return error;
    }
}
const userData = verify();

export default userData;