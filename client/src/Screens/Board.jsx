import React from "react";
import Menu from "../Components/Menu";
import Note from "../Components/Note";
import Footer from "../Components/Footer";
import "../Style/Board.scss";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="fp_main">
        <img 
        id="background" 
        className="img-responsive" 
        src="https://i.imgur.com/V324XgZ.jpg" 
        alt="brown corkboard background" />
          <div className="board-menu">
            <Menu />
          </div>
          <div className="board-box">
            {/* <p>This is THE BOARD</p> */}
            {/* INSERT API/RENDER NOTEs */}
            <div className="notes">
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Board;
