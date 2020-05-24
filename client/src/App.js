import React from 'react';
import MenuContainer from './Components/MenuContainer'
import Board from './Screens/Board'
import MyBoard from './Screens/MyBoard'
import Login from './Screens/Login'
import Register from './Screens/Register' 
import Logout from './Screens/Logout'
import {Switch, Route} from 'react-router-dom'
import userData from './Services/Auth';
import logOut from './Services/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      anonLikes: []
    };
  }

  componentDidMount = async () => {
    this.setUser();
  }

  setUser = async () => {

    const user = await userData().user;

    if (user) {
      this.setState({
        userId: user.id,
        userEmail: user.email,
        userName: user.name,
        anonLikes: []
      })
    }
  }

  clearUser = () => {
    this.setState({ userId: null })
  }

  trackAnons = (noteId) => {
    if (this.state.anonLikes.includes(noteId)) {
      const newLikes = this.state.anonLikes.filter(id => id != noteId);
      this.setState({
        anonLikes: newLikes
      })
    } else {
      const newLikes = this.state.anonLikes.concat([noteId]);
      this.setState({
        anonLikes: newLikes
      })
    }
  }


  render () {
    const myBoard = this.state.userId ? (<MyBoard userId={this.state.userId} />) : (<Login setUser={this.setUser} />)

    return (
      <div className="App">
        <Switch>
            <Route path="/register">
              <Register setUser={this.setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={this.setUser} />
            </Route>
            <Route path="/logout">
              <Logout clearUser={this.clearUser} />
            </Route>
            <Route path="/myboard">
              {myBoard}
            </Route>
            <Route path="/">
              <Board userId={this.state.userId} anonLikes={this.state.anonLikes} trackAnons={this.trackAnons} />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
