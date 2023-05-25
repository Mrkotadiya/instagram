import React from "react";
import "./SignIn.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signIn">
      <div className="">
        <div className="loginForm">
          <img src={logo} className="signUplogo" alt="" />
          <div>
            <input type="email" id="email" name="email" placeholder="email" />
          </div>
          <div>
            <form action="">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            </form>
          </div>
          <input type="submit" id="login-btn" value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
