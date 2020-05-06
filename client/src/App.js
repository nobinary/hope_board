import React from 'react';
import MenuContainer from './Components/MenuContainer'
import Board from './Screens/Board'
import MyBoard from './Screens/MyBoard'
import Login from './Screens/Login'
import Register from './Screens/Register' 
// import CreateNote from './Components/CreateNote'
import About from './Components/About'
import {Switch, Route} from 'react-router-dom'
import userData from './Services/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null
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
        userFirstName: user.first_name,
        userLastName: user.last_name
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Switch>
            <Route path="/about">
              <About/>
            </Route>
            {/* <Route path="/createnote">
              <CreateNote/>
            </Route> */}
            <Route path="/register">
              <Register setUser={this.setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={this.setUser} />
            </Route>
            <Route path="/myboard">
              <MyBoard userId={this.state.userId} />
            </Route>
            <Route path="/">
              <Board userId={this.state.userId} />
            </Route>
          </Switch>
      </div>
    );
  }
}

export default App;
