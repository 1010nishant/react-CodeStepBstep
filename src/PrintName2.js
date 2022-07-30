import React,{Component, useState} from 'react';



function PrintName2() {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)

  function printtext(val) {
    console.log(val.target.value);
    setData(val.target.value)
    setPrint(false)
    
  }

  return(
    <div className='App'>
      <h1>{"props in react (:"}</h1>

     { print ? <h1>{data}</h1> : null}

      <input type={'text'} onChange={printtext}></input>
      <button onClick={()=>setPrint(true)}>print data</button>
    </div>
  )
  
}

export default PrintName2;