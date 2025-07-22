import React, {useState} from "react";




let time = new Date().toLocaleTimeString('en-US', { hour12: false });

function App() {

  const [count, setCount] = useState(time);

  function getTime() {
    let currTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    setCount(currTime);
  }

  setInterval(getTime, 1000)

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
