import { useState } from "react";
import "./App.css";
let counter = 5;

// function AddHandler() {
//   setCounter(counter + 1);
// }

function App() {
  const [counter, setCounter] = useState(0);

  function AddHandler() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <button onClick={AddHandler}>Add value</button>
      <h1>counter value{counter}</h1>
    </div>
  );
}

export default App;
