import React from 'react'

function FPButton(props) {
    return (
      <div className="board_main">
          <button>{props.text}</button>
      </div>
    );
  }
  
  export default FPButton;