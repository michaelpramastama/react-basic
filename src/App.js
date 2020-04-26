import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count - 1)}>
        Kurang
      </button>
    </div>
  );
}

export default App;
