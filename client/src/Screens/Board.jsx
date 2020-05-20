import React from "react";
import Logout from './Logout';
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
    this.getNotesFromApi();
  }

  getNotesFromApi = async () => {
     const notes = await fetchNotes(); 
     console.log(notes);
     this.setState(state => ({
       notes: notes.data
     }));
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
            userId={this.props.userId} 
            user_liked={item.user_liked} // rename this? activeUserLiked, maybe?
            top={Math.floor(Math.random() * 60)-30}
            left={Math.floor(Math.random() * 60)-30}
            rotate={Math.floor(Math.random() * 10) * (Math.random() > .5 ? -1 : 1)}
            zIndex={this.state.notes.length - index} 
            refresh={this.getNotesFromApi}
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
            <MenuContainer userId={this.props.userId} />
          </div>
          <div className="board-box">
            <div className="notes">
            {this.renderNotes()}
            </div>
        </div>
        <Footer userId={this.props.userId} refresh={this.getNotesFromApi} />
      </div>
    );
  }
}

export default Board;
