import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [items , setItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setName(value)
  }

  function handleItem(){
    setItem(preValue => {
      return [...preValue, name];
    })
    setName("");
  }
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" type="text" value={name} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(x => <li>{x}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
