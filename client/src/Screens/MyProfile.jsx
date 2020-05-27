import React from "react";
import MenuContainer from "../Components/MenuContainer";
import Footer from "../Components/Footer";
import {fetchUser} from '../Services/ApiMethods'
import "../Style/Board.scss";
import "../Style/MyBoard.scss";
import "../Style/MyProfile.scss"

class myProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId
    };
  }

  componentDidMount = () => {
    this.getUser()
  }

  getUser = () => {
    const id = this.state.userId
    const userData = {
      user: {
        id: id
      }
    }
    fetchUser(userData);
  }

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
            <MenuContainer 
            // userId={this.props.userId} 
            />
          </div>
          <div className="myboard">
            {/* {console.log(this.props)} */}
            <div className="board-box">
            <div className="profile p_modal">
            <p className="p_header">My Profile:</p>
            </div>
            </div>
            </div>
        <Footer 
        // userId={this.props.userId} 
        refresh={this.getMyBoard} />
        </div>
        </>
      )
  }
}
  
  export default myProfile;