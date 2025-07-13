import React from "react";
import ReactDOM from "react-dom";

const now = new Date(2019, 1, 1, 111);

let hour = now.getHours();
let greeting;
const greetingColor = {
    color: ""
}
if ((hour >= 0) && (hour <= 12)){
    greeting = "Good Morning";
    greetingColor.color = "red";
} else if ((hour >= 12) && (hour <= 18)) {
    greeting = "Good Afternoon";
    greetingColor.color = "green";
} else if ((hour >= 18) && (hour < 24)) {
    greeting = "Good Night";
    greetingColor.color = "blue";
}



ReactDOM.render(
    <div>
        <h1 className="heading" style={greetingColor}>{greeting}</h1>
    </div>,
    document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
