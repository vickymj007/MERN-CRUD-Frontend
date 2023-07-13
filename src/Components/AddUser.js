import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AddUser() {

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newUser = {
      name,
      email
    }
    axios.post('https://crud-app-yfc0.onrender.com/api/users',newUser)
    // axios.post('http://localhost:9000/api/users',newUser)
    .then(response =>{
      toast.success("Added new user👍")
      navigate('/show-users')
    })
    .catch(error => {
      toast.error(JSON.parse(error.request.responseText).message)
    })
  }

  return (
    <div className='add-user'>
      <form onSubmit={handleSubmit}>
        <h2>Enter user details</h2>
        <label htmlFor='name'>Name</label>
        
        <input
         type='text' 
         id='name' 
         value={name} 
         onChange={(e)=>setName(e.target.value)} 
         required
         />
        <label htmlFor='email'>Email</label>

        <input 
        type='email' 
        id='email' 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        required
        />
        <input type='submit' value='Add User'/>
      </form>
    </div>
  )
}

export default AddUser