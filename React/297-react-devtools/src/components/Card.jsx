import React from "react";
import Avatar from "./Avatar";
import Contact from "./Contact";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img = {props.img}/>
      </div>
      <div className="bottom">
        <Contact detailInfo = {props.tel}/>
        <Contact detailInfo = {props.email} />
      </div>
    </div>
  );
}

export default Card;
