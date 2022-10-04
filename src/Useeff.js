import React,{useEffect, useState} from "react"
import './App.css';

export default function Useeff(){
    const [data,setData] = useState(100)
    const [count,setCount] = useState(10)

    useEffect(() => {
        console.warn("useeffect called")
    },[])
    return(
        <div className="App">
            <h1>Count {count}</h1>
            <h1>Data {data}</h1>
            <button onClick={() => setData(data + 1)} > update data</button>
            <button onClick={() => setCount(count + 10)} > update count</button>
        </div>
    )
}