import React from "react";
import Login from "./Login";

var isLog = false;

// function renderCondition() {
//   if(isLog === true) {
//     return <h1>Hello</h1>
//   } else {
//     return (
//       <Login />
//       )
    
//   }
// }

const currentTime = new Date(2025, 7, 19, 13).getHours();

function App() {
  return (
    <div className="container">
      {/* {(isLog === true) ? <h1>hello</h1> : <Login />} */}
      {/* {(currentTime > 12) ? <h1>Why are you still working?</h1> : null} */}
      {(currentTime > 12) && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
