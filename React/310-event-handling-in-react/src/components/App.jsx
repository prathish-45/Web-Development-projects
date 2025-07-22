import React, {useState} from "react";

function App() {

  const[name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false)

  let submitText;

  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  function handleHeadingText(event) {
    setHeadingText(name);  
    
    event.preventDefault();
    
  }
  
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleHeadingText}>
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="What's your name?"  
          value={name}/>
        <button
          
          style={{backgroundColor: isMouseOver ? "black" : "white"}}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          type="submit"
        >Submit</button>
      </form>
      
    </div>
  );
}

export default App;
