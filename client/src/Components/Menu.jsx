import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Menu.scss'

function Menu() {
    return (
      <div className="col-md-12">
        <Link className="header-link" to="/">
        <h1>MindBoard</h1>
        </Link>
        <div className="horizontal-line"></div>
          {/* <p>This is a not-yet-hidden navigation menu</p> */}
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/myboard">My Board</Link>
          </div>
    );
  }
  
  export default Menu;