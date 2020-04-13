import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Menu.scss'

function Menu() {
    return (
      <div className="menu_main">
          <p>This is a not-yet-hidden navigation menu</p>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/myboard">My Board</Link>
      </div>
    );
  }
  
  export default Menu;