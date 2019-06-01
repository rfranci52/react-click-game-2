import React from "react";
import "./style.css";

function FriendCard(props) {
// var randomItem = props.id[Math.floor(Math.random()*props.id)];

  // console.log(props.id[Math.floor(Math.random()*props.id)])

  return (
    

 
    <div  onClick={() => props.removeFriend(props.id)} className="remove" className="card">
      



      
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        
        
        𝘅
      </span> */}
      {/* <span onClick={() => props.removeFriend2(props.id)} className="remove">
        
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
