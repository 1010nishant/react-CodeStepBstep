import React from 'react'
export default function Toggle(){
    const [status,setStatus] = React.useState(true)
    
    return (
        <>
        {status ? <h1>hello nishant</h1> : null}
        {/* <button onClick={()=>setStatus(true)}>show</button>
        <button onClick={()=>setStatus(false)}>hide</button> */}
        <button onClick={()=>setStatus(!status)}>toggle</button> 
        </>
    )
}