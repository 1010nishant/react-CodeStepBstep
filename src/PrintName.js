//using class
import React from "react";


export default class PrintName extends React.Component{
    constructor(){
        super();
        this.state = {
            data: null,
            print: false
        }

    }
   
    printtext = (val) => {
        console.log(val.target.value);//only val prints whole dom , val.target prints whole input field ,val.target.valve prints only that value
        this.setState({data : val.target.value})
        this.setState({print : false})
        
      }
    render(){
        return(
            <div className='App'>
      <h1>{"props in react (:"}</h1>

     { this.state.print ? <h1>{this.state.data}</h1> : null}

      <input type={'text'} onChange={this.printtext}></input>
      <button onClick={()=>this.setState({print : true})}>print data</button>
    </div>
        )
     }
    }