import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))

    }
    const  History=useHistory();
    function changeStudent(){
        History.push("/")
       return(
        window.location.reload()
       
       )
      
    }
    function changeRead(){
        // History.push("/create")
       return(
        window.location.reload()
       
       )
      
    }
    function changeEdit(){
        // History.push("/create")
       return(
        window.location.reload()
       
       )
      
    }
  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
        <h3>Students</h3>
        <div className='d-flex justify-content-end'>
            <button className='btn btn-success'  onClick={changeStudent}>Add Student</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <button onClick={changeRead}><Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link></button>
                                <button onClick={changeEdit}><Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link></button>
                                <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home
