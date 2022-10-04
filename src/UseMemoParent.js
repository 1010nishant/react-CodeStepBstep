import React,{useState,useMemo} from 'react'
import './App.css';


export default function UseMemoParent(){
        const [count,useCount] = useState(0)
        const [data,useData] = useState(10)

       const forUpdateMemo = useMemo( function forUpdate(){
        console.warn("hello")
        return count * 23;
    },[count])

        // function Forcount(){
        //      useCount(count + 1)
        // }
        // function Fordata(){
        //      useData(data * 2)
        // }

    return (
        <div>
            <h1>useMemo hook in react</h1>
            <h2>count : {count}</h2>
            <h2>data : {data}</h2>
            <h2>{forUpdateMemo}</h2>
            <button onClick={() => useCount(count + 1)}>update count</button>
            <button onClick={() => useData(data * 2)}>update data</button>
        </div>
    )
}