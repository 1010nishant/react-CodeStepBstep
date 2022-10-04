//child 
export default function SendDataC2P(props){
   const name = "Nishant jangid";
    return (
        <div>
              <h1>User Name is : </h1>
              <button onClick = {() => props.getdata(name)}>click me</button>
        </div>
    )
    
}