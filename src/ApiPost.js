import './App.css';
import React, { useState,useEffect } from 'react'
import ApiCall from './ApiCall';
export default function ApiPost(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    // const [address , setAdress] = useState("");

    function setData(){
        let data = {name,email}
        fetch('https://jsonplaceholder.typicode.com/users',{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body : JSON.stringify(data)
        }).then((response) => {
            console.log("response",response);
            response.json().then((result) => {
                console.log("result",result)
                
            })
        })
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
          result.json().then((response) => {
            setData(response);
          });
        });
      }, []);
    return (
        <div>
            <h1>POST api </h1>
            <input type={'text'} name="name" value = {name}  onChange = {(e) => setName(e.target.value)}></input><br/><br/>
            <input type={'text'} name="name" value = {email} onChange = {(e) => setEmail(e.target.value)}></input><br/><br/>
            {/* <input type={'text'} name="name" value = {address} onChange = {(e) => setAdress(e.target.value)}></input><br/><br/> */}
            <button type='button' onClick={setData} >save new user</button>
            {/* <button type='button' onClick={<ApiCall/>} >save  user</button> */}
        </div> 
    )
}