import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Resistration Form</h1>
      <div className='Form'>
        <label>First Name</label><br></br>
        <input type="text" id="inputField"/>
        <label>Last Name</label>
        <input type="text" id="inputField"/>
        <label>Email</label>
        <input type="text" id="inputField"/>
        <label>Password</label>
        <input type="password" id="inputField"/>
        <div className='submit'>
          <input type="button" value="Submit"></input>
        </div>
      </div>
    </div>
  );
}
export default App;