import React, { Component } from "react";
import "../Style/Register.scss";
import { signUp, signInUser } from '../Services/ApiMethods'
import MenuContainer from '../Components/MenuContainer'
import BigPostIt from "../Shared Components/BigPostIt";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isError: false,
      errorMsg: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ""
    });

  onSignUp = event => {
    event.preventDefault();

    const { name, email, password } = this.state;
    const userData = {
      user: {
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1] || 'noLastName',
        email: email,
        password: password
      }
    }

    signUp(userData)
      .then(() => signInUser(this.state))
      .catch(error => {
        console.error(error);
        this.setState({
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: error
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type="submit" id="submit" className={toggleForm, "btn btn-default"}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return <button type="submit" id="submit" className="btn btn-default">Sign Up</button>;
    }
  };

  render() {
    const { email, username, password, passwordConfirmation } = this.state;

    return (
      <div className="note_main">
        <img
          id="background"
          className="img-responsive"
          src="https://i.imgur.com/V324XgZ.jpg"
          alt="brown corkboard background"
        />
        <div className="nav-link">
          <MenuContainer />
        </div>
        <div id="blue-note"></div>
        <main className="register-form">
          <h1>Register</h1>
          <form id="register-input" onSubmit={this.onSignUp}>
            <label id="label" for="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={this.handleChange}
              id="input"
              required
            ></input>
            <label id="label" for="username">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="input"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            ></input>
            <label id="label" for="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="input"
              name="password"
              value={password}
              type="password"
              onChange={this.handleChange}
              required
            ></input>
            <label id="label" for="password">
            Password Confirmation</label>
            <input
              required
              id="input"
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            {this.renderError()}
            {/* <button type="submit" id="submit" className="btn btn-default">
              Submit
            </button> */}
            <p id="member-link">
              Already a member? Login <a href="/login">here</a>.
            </p>
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
