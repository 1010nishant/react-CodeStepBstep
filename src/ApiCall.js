import "./App.css";
import React, { useEffect, useState } from "react";

export default function ApiCall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  }, []);
  console.warn(data);
  return (
    <div>
      <h1>api call</h1>
      {/* <h2>{data.id}</h2>
      <h2>{data.userId}</h2>
      <h2>{data.title}</h2>
      <h2>{data.body}</h2> */}
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>UserID</td>
            <td>addreas</td>
          </tr>
          {
          data.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.address.city}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}
