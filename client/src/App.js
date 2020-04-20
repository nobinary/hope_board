import React from 'react';
import MenuContainer from './Components/MenuContainer'
import Board from './Screens/Board'
import MyBoard from './Screens/MyBoard'
import Login from './Screens/Login'
import Register from './Screens/Register' 
import CreateNote from './Components/CreateNote'
import About from './Components/About'
import {Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/createnote">
            <CreateNote/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myboard">
            <MyBoard/>
          </Route>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
