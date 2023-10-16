"use client"

import { useState } from "react";

export default function  Counter ()  { 
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter: { counter }</h2>
      <nav>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </nav>
      <hr />
    </div>
  )
}
