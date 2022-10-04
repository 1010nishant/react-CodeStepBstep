import "./App.css";
import React, { useState } from "react";

export default function HOC() {
  const [count, useCount] = useState(null);

  return (
    <div className="App">
      <h1>high order component</h1>
      <HOCBlue cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );

  function Counter() {
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => useCount(count + 1)}>update</button>
      </div>
    );
  }
  function HOCRed(props) {
    return (
      <h2 style={{ backgroundColor: "red", width: 100 }}>
        Red
        <props.cmp />
      </h2>
    );
  }

  function HOCGreen(props) {
    return (
      <h2 style={{ backgroundColor: "green", width: 100 }}>
        Green
        <props.cmp />
      </h2>
    );
  }

  function HOCBlue(props) {
    return (
      <h2 style={{ backgroundColor: "blue", width: 100 }}>
        blue <props.cmp />
      </h2>
    );
  }

  
}
