import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const History=useHistory()

  function change(){
    History.push("/home")
   return(
    window.location.reload()
   
   )
  
}
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <button  onClick={change} className="btn btn-success">Back</button>
      {data.map((student) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {student["id"]}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {student["name"]}
            </li>
            <li className="list-group-item">
              <b>Email: </b>
              {student["email"]}
            </li>
            <li className="list-group-item">
              <b>Age: </b>
              {student["age"]}
            </li>
            <li className="list-group-item">
              <b>Gender: </b>
              {student["gender"]}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Read;
// import React from 'react';

// const Read = () => {
//     return (
//         <div>
//             <h2>hi</h2>
//         </div>
//     );
// }

// export default Read;

