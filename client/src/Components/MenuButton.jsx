import React, {Component} from 'react';
import '../Style/MenuButton.scss'


class MenuButton extends Component {
    render() {
        return (
            <a
            src="https://i.imgur.com/p9P6bPo.png" 
            id="hamburgerButton"
            onMouseUp={this.props.handleMouseDown}
            >MindBoard</a>
        )
    }

}

export default MenuButton;