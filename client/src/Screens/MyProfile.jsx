import React from "react";
import MenuContainer from "../Components/MenuContainer";
import Footer from "../Components/Footer";
import {fetchUser, updateUser} from '../Services/ApiMethods'
import "../Style/Board.scss";
import "../Style/MyBoard.scss";
import "../Style/MyProfile.scss"

class myProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      password: '',
      message: '',
      userId: this.props.userId
    };
  }

  componentDidMount = () => {
    this.props.userId && this.getUser()
  }

  getUser = async () => {
    const resp = await fetchUser(this.props.userId);
    this.setState({
      userName: resp.data.name,
      userEmail: resp.data.email
    })
  }

  submitUserUpdate = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: this.state.userName,
      email: this.state.userEmail
    }
    try {
      const resp = await updateUser(this.props.userId, userInfo, this.state.password);
      console.log('submit: ',resp);
      if (resp) {
        this.setState({message: 'User information updated.'})
      } 
    } catch (error) {
      console.log(error);
      this.setState({message: 'Incorrect password. Please try again.'})
    }
  }

  handleChange = event => {
    this.props.message && this.setState({message: ''});
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
            <MenuContainer userId={this.props.userId} 
            />
          </div>
          <div className="myboard">
            {/* {console.log(this.props)} */}
            <div className="board-box">
              <div className="profile p_modal">
                <p className="p_header">My Profile:</p>
                <form className="update-form" onSubmit={(e) => this.submitUserUpdate(e)}>
                  <div>
                    <label htmlFor="userName">User name:</label> 
                    <input
                      type="text"
                      onChange={(e) => this.handleChange(e)}
                      name="userName"
                      value={this.state.userName}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="userEmail">E-mail:</label> 
                    <input
                      type="text"
                      onChange={(e) => this.handleChange(e)}
                      name="userEmail"
                      value={this.state.userEmail}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label> 
                    <input
                      type="password"
                      onChange={(e) => this.handleChange(e)}
                      name="password"
                      value={this.state.password}
                      required
                    ></input>
                  </div>
                  <div>
                    {this.state.message}
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