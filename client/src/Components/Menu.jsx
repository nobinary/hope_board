import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Screens/Logout'
import '../Style/Menu.scss'


export default class Menu extends Component {

  render() {
    let visibility = "hide";

    if(this.props.menuVisibility) {
      visibility = "show";
    }

    const myBoard = this.props.userId ?
      (<h2>
        <Link className="link" to="/myboard">
          My Board
        </Link>
      </h2>) :
      null;

    const loginLogout = this.props.userId ?
      (
          <h2>
          <Link className="link" to="/logout">
            Logout
          </Link>
        </h2>
      ) :
      (
        <h2>
          <Link className="link" to="/login">
            Login
          </Link>
        </h2>
      )
    const registerLink = this.props.userId ?
      null :
      (
        <h2>
          <Link className="link" to="/register">
            Register
          </Link>
        </h2>
      )      

    return (
      <div className="menu-nav">
      <div id="flyoutMenu"
        onMouseUp={this.props.handleMouseDown}
        className={visibility}>
        <h2>
          <Link className="link" to="/">
              Home
          </Link>
        </h2>
        {myBoard}
        {loginLogout}
        {registerLink}
      </div>
      </div>
    )

  }
}

