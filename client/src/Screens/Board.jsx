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
      <div className="fp_main">
        <div className="board_main">
          <div className="board_menu">
            <Menu />
          </div>
          <div className="board_box">
            <p>This is THE BOARD</p>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Board;