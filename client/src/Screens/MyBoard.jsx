import React from "react";
import Menu from "../Components/Menu";
import Note from "../Components/Note";
import Footer from "../Components/Footer";
import "../Style/MyBoard.css";

class MyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="myboard_main">
          <div className="board_menu">
            <Menu />
          </div>
          <div className="myboard">
            <div className="mylists">
              <p>This is MY POSTS</p>
              {/* INSERT API/RENDER MY NOTES */}
              <div className="mynotes">
                <Note />
                <Note />
                <Note />
              </div>
            </div>
            <div className="mylists">
              <p>This is MY FAVORITES</p>
              {/* INSERT API/RENDER MY FAVORITES */}
              <div className="mynotes">
                <Note />
                <Note />
                <Note />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyBoard;
