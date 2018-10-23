import React from "react";
import "./ItemCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.checkClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
