import React from "react";
import { withRouter } from 'react-router-dom';
import { Component } from "react";
import { signInUser } from "../Services/ApiMethods";
import MenuContainer from '../Components/MenuContainer'
import "../Style/Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isError: false,
      errorMsg: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ""
    });
  };

  onSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = this.state
    const response = await signInUser({email: email, password: password})
    console.log(`resp:`, response);
    if (response.user) {
      await this.props.setUser();
      this.props.history.push('/')
    } else {
      this.setState({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: ""
      });
    }
      // activeUser.then(resp => resp.json())
      // .then(resp => resp.user)
      // .catch(error => {
      //   console.error(error);

      // });
    // if (activeUser) {
    // }
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type="submit" id="submit"  className={toggleForm, "btn btn-default"}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return <button type="submit" id="submit"  className="btn btn-default">Sign In</button>;
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div id="note_main">
        <img
          id="background"
          className="img-responsive"
          src="https://i.imgur.com/V324XgZ.jpg"
          alt="brown corkboard background"
        />
        {/* <BigPostIt
        type="login"
      /> */}
      <div className="nav-bar">
      <MenuContainer />
      </div>
        <div id="yellow-note"></div>
        <main className="login-form">
          <p className="greeting">Nice to see you again!</p>
          <h1 className="login-header">Login</h1>
          <form id="login-input" onSubmit={this.onSignIn}>
            <label id="label" htmlFor="username">
              Your Email
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="input"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <label id="label" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              id="input"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
              required
            />
            {/* <button type="submit" id="submit" className="btn btn-default">
              Submit
            </button> */}
            {this.renderError()}
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
