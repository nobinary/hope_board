import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../Style/Menu.scss'


export default class Menu extends Component {

  render() {
    return (
       
       <div className="col-md-12">
          <Link className="header-link" to="/">
           <h1>MindBoard</h1>
         </Link>
         <div className="horizontal-line"></div>
     
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/register">Register</Link>
            <Link className="link" to="/myboard">My Board</Link>    
            </div> 
    )

  }
}

