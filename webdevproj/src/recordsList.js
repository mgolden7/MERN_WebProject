import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Users = (props) => (
 <tr>
   <td>{props.Users.name}</td>
   <td>{props.Users.email}</td>
   <td>{props.Users.password}</td>
   <td>{props.Users.id}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.Users._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteUser(props.Users._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function UsersList() {
 const [Users, setUsers] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getUsers() {
     const response = await fetch(`http://localhost:5000/Users/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const Users = await response.json();
     setUsers(Users);
   }
 
   getUsers();
 
   return;
 }, [Users.length]);
 
 // This method will delete a record
 /*async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }*/
 
 // This method will map out the records on the table
 function UsersList() {
   return Users.map((Users) => {
     return (
       <Users
         Users={Users}
         deleteUsers={() => deleteUsers(Users._id)}
         key={Users._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Users List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Password</th>
           <th>ID</th>
         </tr>
       </thead>
       <tbody>{UsersList()}</tbody>
     </table>
   </div>
 );
}