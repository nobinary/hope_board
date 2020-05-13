import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {logOut} from '../Services/ApiMethods'
import "../Services/ApiMethods"


class Logout extends Component {
    componentDidMount() {
        const { history, clearUser, userId } = this.props
        logOut(userId)
        .then(() => clearUser())
        .finally(() => history.push('/'))
    }
    
    render() {
        return ''
    }


 }
export default withRouter(Logout)









// state = {
    //     navigate: false
    // }

    // logout = () => {
    //     localStorage.clear();
    //     this.setState({ navigate: true });
    // }

    // render() {
    //     const { navigate } = this.state;

    //     if(navigate) {
    //         return <Redirect to="/" push={true} />
    //     }

    //     return <a onClick={this.logout}>Logout</a>
    // }