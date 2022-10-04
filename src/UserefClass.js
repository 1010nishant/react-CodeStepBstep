import React, { createRef } from "react";
import "./App.css";

export default class UserefClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  componentDidMount() {
    // console.warn(this.inputRef.current.value = 100);
    
  }
  setThing(){
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = "red"
    this.inputRef.current.style.backgroundColor = "yellow"

  }
  render() {
    return (
      <div className="App">
        <h1>Use ref in react</h1>
        <input type={"text"} ref={this.inputRef}></input>
        <button onClick={() => this.setThing()}>change</button>
      </div>
    );
  }
}
