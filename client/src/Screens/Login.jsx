import React from "react";
import { Component } from "react";
import { signInUser } from "../Services/ApiMethods";
// import BigPostIt from "../Shared Components/BigPostIt";
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

  onSignIn = event => {
    event.preventDefault();

    signInUser(this.state)
      .then(resp => console.log(resp))
      .catch(error => {
        console.error(error);
        this.setState({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: ""
        });
      });
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
          <h1>Login</h1>
          <form id="login-input" onSubmit={this.onSignIn}>
            <label id="label" for="username">
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
            <label id="label" for="password">
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

export default Login;
