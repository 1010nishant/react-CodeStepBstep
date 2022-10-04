import './App.css';
import React from 'react'
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'

export default function RoutersBasic(){
        return (
            <BrowserRouter>
            <div className='App'>

            
            <Link to= "/home">Home Page</Link><br/>
                <Link to= "/about">About Page</Link>
                <Routes>
                <Route path="/home" > <Home /></Route>
        <Route path="/about" > <About /></Route>
                </Routes>
           
                
            </div>
            </BrowserRouter>
        )
}

function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>This is my Home Page</p>
      </div>
    )
  }
  function About() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is my About Page</p>
      </div>
    )
  }