import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Style/Menu.scss'


export default class Menu extends Component {

  render() {
    let visibility = "hide";

    if(this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div id="flyoutMenu"
      onMouseUp={this.props.handleMouseDown}
      className={visibility}>
        <h2>
          <Link 
            className="link" to="/">Home</Link></h2>
            <h2>
            <Link 
          className="link" to="/login">Login</Link></h2>
          <h2>
          <Link 
        className="link" to="/register">Register</Link></h2>
        <h2>
          <Link 
        className="link" to="/myboard">My Board</Link></h2>
      </div>
    )

  }
}

