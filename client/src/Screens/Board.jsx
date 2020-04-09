import React from 'react';
import Menu from '../Components/Menu'
import Note from '../Components/Note'
import FPButton from '../Shared Components/FPButton'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
    return (
      <div className="board_main">
          <Menu/>
          <p>This is THE BOARD</p>
          <Note/>
        <FPButton
        text="This is a Create Note  (+) Button"
        />
        <FPButton
        text="This is an ABOUT (?) Button"
        />
      </div>
    );
  }
}
  
  export default Board;