import React from 'react'
import './App.css';
export default function Forms(){
            const [name,setName] = React.useState('')
            const [interest,setInterest] = React.useState('')
            const [tnc,setTnc] = React.useState(false)

            function getFormData(event){
                console.log(name,interest,tnc)
                    event.preventDefault();
            }


    return (
        <div className="App">
        <h1>handling forms</h1>
        <form onSubmit={getFormData}>
            <input type={'text'} placeholder = "username" value={name} onChange = {(e) =>setName (e.target.value)}></input> <br /> <br />
            <select onChange={(e) => setInterest(e.target.value)} >
                
                <option>select Options</option>
                <option>DC</option>
                <option>Marvel</option>
                <option>DCEU</option>
            </select><br /> <br />
            <input type={'checkbox'} onChange= {(e) => setTnc(e.target.checked)}></input><span>Accept terms and conditions</span><br /> <br />
            <button type="submit">Submit</button>
            <button>Clear</button>
        </form>

        </div>
    )
}