import React, { useState } from "react";
import "./SignIn.css";
import logo from "../../images/logo.png";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast("wow")
  const notifySuccess= ()=> toast("Login")

  const emailVerify = "" ;
  const pwdVerify = "";

  const postData = ()=>{

    // if(!emailVerify.test(email)){
    //    notify("Invalid Email")
    //   return
    // } else if(!pwdVerify.test(password)){
    //   notify("password must 8 charachter")
    //   return
    // }

    console.log(email, password);
    fetch("http://localhost:6969/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    
      .then((res) => res.json())
      .then((data) => {
        if(data.error){
          notify();
        }else{
          notifySuccess()
        }
        console.log(data);
      });
  }



  return (
    <div className="signIn">
      <div className="">
        <div className="loginForm">
          <img src={logo} className="signUplogo" alt="" />
          <div>
            <input type="email" id="email" name="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div>
            <form action="">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            </form>
          </div>
          <input type="submit" id="login-btn" value="Sign In" onClick={()=>{postData()}} />
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
