import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./SignUp.css";
import { toast } from "react-toastify";

function SignUp() {
  
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const notify = err => toast.error(err);

  const notifySuccess = msg=> toast.success(msg);

  const postData = () => {
    console.log(name, email, password, username);
    fetch("http://localhost:6969/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.error){
          notify(data.error);
        }
        else {
          notifySuccess(data.success)
          navigate('/')
        }
        console.log(data);
      });
  };

  useEffect(() => {});

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img src={logo} className="signUplogo" alt="" />
          <p className="loginPara">
            SignUp to see video and photos <br /> from your friend
          </p>
          <div className="">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <form action="">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </form>
          </div>
          <p
            className="loginPara"
            style={{ fontSize: "13px", margin: "3px 0px " }}
          >
            By Signin up, you agree to our Terms , <br />
            privacy policy and coockies policy.
          </p>
          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            onClick={() => {
              postData();
            }}
          />
        </div>
        <div className="form2">
          Already have an Account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
