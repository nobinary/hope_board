import React from "react";
import { Component } from "react";
import { signInUser } from "../Services/ApiMethods";
// import BigPostIt from "../Shared Components/BigPostIt";
import "../Style/Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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

    const { history, setUser } = this.props;

    signInUser(this.state)
      .then(res => setUser(res.user))
      .then(() => history.push("/"))
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
    const { username, password } = this.state;
    return (
      <div id="note_main">
        <img
          id="background"
          className="img-responsive"
          src="https://i.imgur.com/PYvrnAk.jpg"
          alt="brown corkboard background"
        />
        {/* <BigPostIt
        type="login"
      /> */}
        <div id="yellow-note"></div>
        <main className="login-form">
          <p>Nice to see you again!</p>
          <h1>Login</h1>
          <form id="login-input" onSubmit={this.onSignIn}>
            <label id="label" for="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="input"
              required
              name="username"
              value={username}
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
