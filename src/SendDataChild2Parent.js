import React from 'react'
import './App.css';
import SendDataC2P from './SendDataC2P';


export default function SendDataChild2Parent (){

    function getName(name)
    {
      alert(name)
    }

    return(
        <div className='App'>
                <h1>Lifting State Up</h1>
                <SendDataC2P getdata = {getName}/>
        </div>
    )
}