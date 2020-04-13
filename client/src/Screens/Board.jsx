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
        <img id="background" class="img-responsive" src="https://i.imgur.com/PYvrnAk.jpg" alt="brown corkboard background" />
          <div class="board-menu">
            <Menu />
          </div>
          <div class="board-box">
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
