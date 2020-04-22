import React from "react";
import MenuContainer from "../Components/MenuContainer";
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
   console.log(notes)
   const self = this
  notes.then(function(data) { 
  self.setState(state => ({
        notes: data.data
      }));
    });
  }

  renderNotes = () => {
    const { history } = this.props;
    if (this.state.notes && this.state.notes.length > 0) {
      return this.state.notes.map((item, index) => {
        return (
          <Note
            key={index}
            note_id={item.id}
            user_id={item.user_id}
            user_name={item.user_name}
            content={item.content}
            color={item.color}
            num_likes={item.num_likes}
            created_at={item.created_at}
            ago_string={item.ago_string}
            history={history}
            activeId={this.props.userId}
          />
        );
      });
    }
  };


  render() {
    return (
      <div id="fp_main">
        <img
        id="background" 
        className="img-responsive" 
        src="https://i.imgur.com/V324XgZ.jpg" 
        alt="brown corkboard background" />
          <div className="board-menu">
            <MenuContainer />
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
