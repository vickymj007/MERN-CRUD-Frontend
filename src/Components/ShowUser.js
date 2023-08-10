import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { avatar } from '../avatar/avatar'
import {BsFillPeopleFill, BsFillTelephoneFill} from 'react-icons/bs'

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
        // axios.delete(`http://localhost:9000/api/users/${id}`)
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
        {!user? (<div className='loader'></div>) : 
        (<div className='contact-list'>
            {user.map(contact=>(
                <div className='contact-card' key={contact._id}>
                    <div>
                        <img src={avatar[contact.avatar_id]} alt='Avatar'/>
                    </div>
                    <div>
                        <h3>{contact.name}</h3>
                        <h5><span><BsFillTelephoneFill/></span> {contact.contact_number}</h5>
                        <p><span><BsFillPeopleFill/></span> {contact.relation}</p>
                        <div>
                            <button onClick={handleEdit}className='edit'>Edit</button>
                            <button onClick={()=>handleDelete(contact._id)} className='delete'>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>)}
    </div>
  )
}

export default ShowUser