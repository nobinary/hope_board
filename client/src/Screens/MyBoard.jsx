import React from "react";
import Menu from "../Components/Menu";
import Note from "../Components/Note";
import {fetchMyLists} from '../Services/ApiMethods'
import Footer from "../Components/Footer";
import "../Style/MyBoard.scss";

class MyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myNotes: [],
      myFavorites: []
    };
  }

componentDidMount() {
   const notes = fetchMyLists(1); //HARDCODED USER
   const self = this
  notes.then(function(data) { 
  console.log(data.data)
  self.setState(state => ({
        myNotes: data.data.notes,
        myFavorites: data.data.favorites
      }));
      // console.log(self.state.myNotes)
    });
  }

  renderMyNotes = () => {
    const { history } = this.props;
    if (this.state.myNotes && this.state.myNotes.length > 0) {
      return this.state.myNotes.map(item => {
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

  renderMyFavorites= () => {
    const { history } = this.props;
    if (this.state.myFavorites && this.state.myFavorites.length > 0) {
      return this.state.myFavorites.map(item => {
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
      <div>
        <div className="myboard_main">
          <div className="board_menu">
            <Menu />
          </div>
          <div className="myboard">
            <div className="mylists">
              <p>This is MY POSTS</p>
              <div className="mynotes">
               {this.renderMyNotes()}
              </div>
            </div>
            <div className="mylists">
              <p>This is MY FAVORITES</p>
              <div className="mynotes">
               {this.renderMyFavorites()}
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
