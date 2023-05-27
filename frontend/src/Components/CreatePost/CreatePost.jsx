import React from "react";
import "./CreatePost.css";

function CreatePost() {

    const loadFile = (event)=>{
        let output = document.getElementById('output');
        output.src= URL.createObjectURL(event.target.files[0]);
        output.onload = function(){
            URL.revokeObjectURL(output.src) 
        }


    }


  return (
    <div className="CreatePost">
      <div className="post-header">
        <h4 style={{margin:"3px auto"}}>Create New Post</h4>
        <button id="post-btn">Share</button>
      </div>

      <div className="main-div">
          <img id='output' src="https://cdn.icon-icons.com/icons2/510/PNG/512/image_icon-icons.com_50366.png" alt="/"/>
        <input type="file" accept="image/*" onChange={(event)=>{loadFile(event)}} />
      </div>

      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>
          <h5>Ramesh</h5>
        </div>
        <textarea type='text' placeholder="Wtite a Caption" ></textarea>
      </div>
    </div>
  );
}

export default CreatePost;
