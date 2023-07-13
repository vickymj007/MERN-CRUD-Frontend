import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function ShowUser() {
    const [user,setUser]= useState(null)

    useEffect(()=>{
        axios.get('https://crud-app-yfc0.onrender.com/api/users')
        // axios.get('http://localhost:9000/api/users')
        .then(response =>{
            setUser(response.data)
        })
        .catch(error=> console.log(error.message))
    },[user])

    const handleDelete =(id)=>{
        axios.delete(`https://crud-app-yfc0.onrender.com/api/users/${id}`)
        .then(res =>{
            toast.success("Deleted User")
        })
        .catch(error => toast.error(error.message))
    }

    const handleEdit = ()=>{
        toast.info("Edit button Clicked")
    }

  return (
    <div className='user-page'>
        {!user? (<p>Loading...</p>) : 
        (<table>
            <thead>
               <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Edit</th>
                   <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {user.map(user=>(
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button className='edit' onClick={handleEdit}>Edit</button></td>
                        <td><button className='delete' onClick={()=>handleDelete(user._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
       </table>)}
    </div>
  )
}

export default ShowUser