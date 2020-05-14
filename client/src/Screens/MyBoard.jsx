import React from "react";
import MenuContainer from "../Components/MenuContainer";
import Note from "../Components/Note";
import { fetchMyLists } from '../Services/ApiMethods'
import Footer from "../Components/Footer";
import Tabs from '../Components/Tabs'
import "../Style/MyBoard.scss";

class MyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myNotes: [],
      myFavorites: [],
      userId: this.props.userId
    };
  }

  componentDidMount = async () => {
    this.getMyBoard();
  }

  getMyBoard = async () => {
    const myBoard = await fetchMyLists(this.state.userId);
    console.log(myBoard);
    this.setState(state => ({
      myNotes: myBoard.data.notes,
      myFavorites: myBoard.data.favorites
    }));
  }

  renderMyNotes = () => {
    const { history } = this.props;
    if (this.state.myNotes && this.state.myNotes.length > 0) {
      return this.state.myNotes.map((item, index) => {
        return (
          <Note
            key={index}
            note_id={item.id}
            user_id={item.user_id}
            userId={this.props.userId}
            content={item.content}
            color={item.color}
            num_likes={item.num_likes}
            created_at={item.created_at}
            history={history}
            refresh={this.getMyBoard}
            delete_btn="true"
            top={Math.floor(Math.random() * 60) - 30}
            left={Math.floor(Math.random() * 60) - 30}
            rotate={Math.floor(Math.random() * 10) * (Math.random() > .5 ? -1 : 1)}
            zIndex={this.state.myNotes.length - index}
          />
        );
      });
    }
  };

  renderMyFavorites = () => {
    const { history } = this.props;
    if (this.state.myFavorites && this.state.myFavorites.length > 0) {
      return this.state.myFavorites.map((item, index) => {
        return (
          <Note
            key={index}
            note_id={item.id}
            user_id={item.user_id}
            userId={this.props.userId}
            setUser={this.setUser}
            content={item.content}
            color={item.color}
            num_likes={item.num_likes}
            created_at={item.created_at}
            history={history}
            user_liked={true}
            refresh={this.getMyBoard}
            delete_btn="false"
            top={Math.floor(Math.random() * 60) - 30}
            left={Math.floor(Math.random() * 60) - 30}
            rotate={Math.floor(Math.random() * 10) * (Math.random() > .5 ? -1 : 1)}
            zIndex={this.state.myFavorites.length - index}
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
            <MenuContainer userId={this.props.userId} />
          </div>
          <div className="myboard">
            <div className="mylists">
              <Tabs>
                <div label="My Posts">
                  {/* Hello I am Posts */}
                  {this.renderMyNotes()}
              </div>
                <div label="My Favorites">
                  {/* Hello I am Favorites */}
                  {this.renderMyFavorites()}
              </div>
              </Tabs>
              {/* <p className="my-board-header">My Posts</p>
              <div className="mynotes">
                {this.renderMyNotes()}
              </div> */}
            </div>
            {/* <div className="mylists">
              <p className="my-board-header">My Favorites</p>
              <div className="mynotes">
                {this.renderMyFavorites()}
              </div>
            </div> */}
          </div>
        </div>
        <Footer userId={this.props.userId} refresh={this.getMyBoard} />
      </>
    );
  }
}

export default MyBoard;
