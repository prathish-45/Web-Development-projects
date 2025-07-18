import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img 
        src={props.img} 
        alt="avatar_img" width={"250px"}/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card 
      name = "Hiphop Tamizha"
      img = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcJ7I348W3EYpWQxah5Swhu-9MQMjp-JVQqsINPVUFQ1o-CztrfUPmpkHNYMbExuErudMtcgsYLL-prWd2k6lgNIW23B9WQHgjGMtU7JygPQ"
      tel = "+123 456 789"
      email = "hiphop@tamizha.com"
    />
    
    <Card 
      name = "Jack Bauer"
      img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel = "+987 654 321"
      email = "jack@nowhere.com"
    />
    
    <Card 
      name = "Chuck Norris"
      img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel = "+918 372 574"
      email = "gmail@chucknorris.com"
    />

  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
