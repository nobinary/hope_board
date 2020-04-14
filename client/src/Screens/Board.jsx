import React from "react";
import Menu from "../Components/Menu";
import Note from "../Components/Note";
import Footer from "../Components/Footer";
import {fetchNotes} from '../Services/ApiMethods'
import "../Style/Board.scss";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
   const notes = fetchNotes();
   const self = this
  notes.then(function(data) { 
  console.log(data.data)
  self.setState(state => ({
        notes: data.data
      }));
      console.log(self.state.notes)
    });
  }

  renderNotes = () => {
    const { history } = this.props;
    console.log("renderstate" + this.state.notes);
    if (this.state.notes && this.state.notes.length > 0) {
      return this.state.notes.map(item => {

        return (
          <Note
            note_id={item.id}
            user_id={item.user_id}
            content={item.content}
            color={item.color}
            num_likes={item.num_likes}
            created_at={item.created_at}
            history={history}
          />
        );
      });
    }
  };


  render() {
    return (
      <div id="fp_main">
        <img id="background" className="img-responsive" src="https://i.imgur.com/PYvrnAk.jpg" alt="brown corkboard background" />
          <div class="board-menu">
            <Menu />
          </div>
          <div className="board-box">
            <div className="notes">
            {this.renderNotes()}
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Board;
