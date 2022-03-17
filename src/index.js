import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const reset = props.reset;
  return (
    <button onClick={(event) => {
      reset();
    }}>{props.children}</button>
  );
};

const Application = () => {

  // your code here
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
    // your code here
  };

  return (
    <main>
      <input value={name} placeholder='Type your name' onChange={(event) => setName(event.target.value)}></input>
      <Button reset={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
