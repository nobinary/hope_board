import React, { Component } from 'react'
import Menu from './Menu'
import MenuButton from './MenuButton'
import '../Style/MenuContainer.scss'


class MenuContainer extends Component {
  constructor(props,context) {
    super(props,context);

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log('Clicked');
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <>
      {/* <h1 className="main-header">MindBoard</h1> */}
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
          </>
      // <div>
      //       <li>
      //         <Link 
      //       className="header-link" to="/">
      //         MindBoard
      //       </Link>
      //       </li>         
      // </div>
    );
  }
}

export default MenuContainer;