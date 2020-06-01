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
      userName: '',
      userEmail: '',
      password: ''
    };
  }

  componentDidMount = () => {
    this.props.userId && this.getUser()
  }

  getUser = async () => {
    const resp = await fetchUser(this.props.userId);
    console.log(resp)
    this.setState({
      userName: resp.data.name,
      userEmail: resp.data.email
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            <MenuContainer 
            // userId={this.props.userId} 
            />
          </div>
          <div className="myboard">
            {/* {console.log(this.props)} */}
            <div className="board-box">
              <div className="profile p_modal">
                <p className="p_header">My Profile:</p>
                <form className="update-form" onSubmit={this.submitUserUpdate}>
                  <div>
                    <label HTMLfor="userName">User name:</label> 
                    <input
                      type="text"
                      onChange={(e) => this.handleChange(e)}
                      name="userName"
                      value={this.state.userName}
                      required
                    ></input>
                  </div>
                  <div>
                    <label HTMLfor="userEmail">E-mail:</label> 
                    <input
                      type="text"
                      onChange={(e) => this.handleChange(e)}
                      name="userEmail"
                      value={this.state.userEmail}
                      required
                    ></input>
                  </div>
                  <div>
                    <label HTMLfor="password">Password:</label> 
                    <input
                      type="text"
                      onChange={(e) => this.handleChange(e)}
                      name="password"
                      value={this.state.password}
                      required
                    ></input>
                  </div>
                  <div className="post-cont">
                    <button type="submit" id="submit" className="btn btn-default">
                      Update
                    </button>
                  </div>
                </form>
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