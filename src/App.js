import React from 'react';
import styles from './App.module.css'
import {useState} from 'react'

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=> prev + 1);
  console.log("render")
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
