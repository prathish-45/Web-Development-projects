import React from "react";

function Entry(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <div className="container">
                <div><h2>Home</h2></div>
                <div><h2>About</h2></div>
                <div><h2>Help</h2></div>
            </div>
        </div>
    )
}

export default Entry;