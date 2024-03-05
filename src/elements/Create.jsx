import React, { useState } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    const  History=useHistory();
    function changeStudent(){
        History.push("/home")
       return(
        window.location.reload()
       
       )
      
    }
    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
        .then((res)=>{
          
            History.push("/home");
            window.location.reload()
            // res.redirect("/home")
            console.log(res)
        })
        .catch((err)=>console.log(err))
      

    }
  return (
    <div className='container vh-100 vw-100 bg-primary bg-blue'>
        <div className='row'>
            <h3>Add Student</h3>
            <div className='d-flex justify-content-end'>
                <button onClick={changeStudent} class='btn btn-success'>Home</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-3'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' required onChange={(e)=> setValues({...values, name: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' name='gender' required onChange={(e)=> setValues({...values, gender: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='age'>Age</label>
                    <input type='number' name='age' required onChange={(e)=> setValues({...values, age: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <button type='submit' onClick={changeStudent} className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create