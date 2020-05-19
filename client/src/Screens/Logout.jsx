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




