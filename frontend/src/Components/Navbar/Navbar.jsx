import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
          <li> <Link to="/signup"> Sign up </Link></li>
          <li> <Link to="/signin"> Sign In</Link></li>
          <li> <Link to="/profile">Profile</Link> </li>
          <li> <Link to="/createpost">Create Post</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar