import React from 'react';
import "./Profile.css";

function Profile() {
  return (
    <div className='profile'>
      <div className="profile-frame">
        <div className="profile-pic">
          <img src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTcxODgwMnx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
        <div className="profile-data">
          <h1>Nirbhay </h1>
          <div className="profile-info">
            <p>30 post</p>
            <p>200 follower</p>
            <p>200 following</p>
          </div>
        </div>
      </div>
      <hr style={{width:"90%", margin:" 25px auto", opacity:"0.8"}}/>
      <div className="profile-gallery">
      <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />
      <img src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
      <img src="https://images.unsplash.com/photo-1542033474370-d28774f3338d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNzE4ODAyfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      <img src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
      <img src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTcxODgwMnx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" alt="" />
      <img src="https://images.unsplash.com/photo-1583243567239-3727551e0c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlJTIwZm9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" />

      </div>
    </div>
  )
}

export default Profile