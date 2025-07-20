import React from "react";
import Login from "./Login";
import Register from "./Register";



function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isUserRegistered && <input type="password" placeholder="Confrim password" /> }
      <button type="submit">
        {props.isUserRegistered ? "Login":"Register"}
      </button>
    </form>
  );
}

export default Form;
