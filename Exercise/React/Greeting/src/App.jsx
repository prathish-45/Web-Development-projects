import { useState } from 'react'
import CreateGreet from "./components/CreateGreet";
import './style.css'
import GreetHistory from './components/GreetHistory';


function App() {
    
    const [greets, setGreet] = useState([]);

    function addGreet(name) {
        setGreet (preValue => {
            return [...preValue, name];
        })
        
    }

    return (
        <div>
            <CreateGreet onAdd={addGreet}/>
            {greets.map((names , index) => {
                return(
                    <GreetHistory 
                        key={index}
                        greetName={names}
                    />
                )
            })}
        </div>
    )
}

export default App
