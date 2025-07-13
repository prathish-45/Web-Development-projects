import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className= "food-item" src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ="/>
      <img className= "food-item" src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" />
      <img className= "food-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQzQqVBk7LmMbMSaEuRy3AkVv1lyGqThm4Q&s"/>
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:className= "food-item" 
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
