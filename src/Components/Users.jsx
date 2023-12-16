import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [loadedUsers,setLoadedUsers]=useState(users)

  const handleDelete=id=>{
    fetch(`http://localhost:5000/user/${id}`,{
      method:'DELETE'

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      const remaining=loadedUsers.filter(user=> user._id!=id)
      setLoadedUsers(remaining)
    })
  }

  console.log(users);
  return (
    <div>
      <h1>Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Email</th>
              <th>Last Logged In</th>
              <th>Created At</th>
              <th>Delete</th>
            </tr>
              
          </thead>
          <tbody>
           
            {loadedUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                
                <td></td>
                <td>{user.createTime}</td>
                <td>
                   <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
