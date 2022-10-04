import React, { useRef } from "react";
import "./App.css";
export default function UserefHook(){

    let inputRef = useRef(null)
    function setThing(){
        console.warn(inputRef.current.value);
        inputRef.current.style.color = "red"
        inputRef.current.style.backgroundColor = "yellow"
        inputRef.current.focus()
    
      }

    return (
        <div className="App">
             <h1>Use ref in react</h1>
        <input type={"text"} ref={inputRef}></input>
        <button onClick={setThing}>change</button>
        </div>
    )

}