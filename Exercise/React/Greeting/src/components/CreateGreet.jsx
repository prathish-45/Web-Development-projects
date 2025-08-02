import {useState} from 'react';


function CreateGreet (props) {
    const [name, setName] = useState("Hello");

    function handleChange (event) {
        const value = event.target.value
            setName(value);
    }

    function handleClick () {
        props.onAdd(name);
    }

    return (
        <div className='createGreet'>
            <h1>{name}</h1>
            <input onChange={handleChange} type="text" placeholder='Enter your name' value={name}/><br />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default CreateGreet;