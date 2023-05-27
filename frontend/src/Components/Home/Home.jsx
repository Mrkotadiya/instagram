import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="card">
        {/* card-header */}
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <h5>Ramesh</h5>
        </div>

        {/* card-image */}
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>

        {/* card - contennt */}
        <div className="card-content">
          <span className="material-symbols-outlined">favorite</span>
          <p>1 Like</p>
          <p>this is amezing!</p>
        </div>

        {/* add comment  */}
        <div className="add-comment">
          <span className="material-symbols-outlined">mood</span>
          <input type="text" placeholder="add a comment" />
          <button className="comment">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
