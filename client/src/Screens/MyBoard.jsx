import React from "react";
import MenuContainer from "../Components/MenuContainer";
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
            delete_btn="true"
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
            delete_btn="true"
          />
        );
      });
    }
  };


  render() {
    return (
      <>
        <div className="myboard_main">
        <img 
        id="background" 
        className="img-responsive" 
        src="https://i.imgur.com/V324XgZ.jpg" 
        alt="brown corkboard background" 
        />
          <div className="board_menu">
            <MenuContainer />
          </div>
          <div className="myboard">
            <div className="mylists">
              <p className="my-board-header">My Posts</p>
              <div className="mynotes">
               {this.renderMyNotes()}
              </div>
            </div>
            <div className="mylists">
              <p className="my-board-header">My Favorites</p>
              <div className="mynotes">
               {this.renderMyFavorites()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MyBoard;
