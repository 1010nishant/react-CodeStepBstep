import './App.css';
import React from 'react'
export default function NestedList() {
  const users = [
    {
      name: "Nishant",
      email: "nishu@test.com",
      addreas: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "ram",
      email: "ram@test.com",
      addreas: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "shyam",
      email: "shyam@test.com",
      addreas: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <table border={1}>
        <tbody>
          <tr>
            <td>S.N.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Addreas</td>
          </tr>
        </tbody>
        {users.map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>
              <table>
                <tbody>{
                  element.addreas.map((data) =>
                  <tr>
                    <td>{data.hm}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                  </tr>
                  )
                }
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </table>
      <table>
        <tbody></tbody>
      </table>
    </div>
  );
}
