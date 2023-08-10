import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { avatar } from '../avatar/avatar.js'
import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai'

function AddUser() {

  const [name,setName]= useState("")
  const [contact,setContact]= useState("")
  const [relation,setRelation]= useState("")
  const [avatar_id,setAvatar_id]= useState("Choose Avatar")
  const [loading,setLoading]= useState(false)
  const [openPopup,setOpenPopup]= useState(false)
  const navigate = useNavigate()

  const handleClick = (e,index)=>{
    setAvatar_id(index)
    setOpenPopup(!openPopup)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(contact.length !== 10) return toast.warn("Please enter a 10 digit number");
    if(relation === "Choose relation" || relation === "") return toast.warn("Please choose relation");
    if(avatar_id === "Choose Avatar") return toast.warn("Please choose Avatar");
    setLoading(true)
    const newUser = {
      name,
      contact_number:+contact,
      relation,
      avatar_id
    }
    console.log(newUser);

    axios.post('https://crud-app-yfc0.onrender.com/api/users',newUser)
    // axios.post('http://localhost:9000/api/users',newUser)
    .then(response =>{
      toast.success("Added new user👍")
      setLoading(false)
      navigate('/show-users')
    })
    .catch(error => {
      toast.error(error.response.data.message)
      setLoading(false)
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
        <label htmlFor='email'>Contact number</label>

        <input 
        type='number' 
        id='contact' 
        value={contact} 
        onChange={(e)=>setContact(e.target.value)} 
        required
        />
      
        <select onChange={(e)=>setRelation(e.target.value)} required>
          <option value="Choose relation">Choose relation</option>
          <option value="Mom">Mom</option>
          <option value="Dad">Dad</option>
          <option value="Friend">Friend</option>
          <option value="Sister">Sister</option>
          <option value="Brother">Brother</option>
          <option value="Cousin">Cousin</option>
          <option value="Niese">Niese</option>
          <option value="Uncle">Uncle</option>
          <option value="Aunt">Aunt</option>
          <option value="Grand father">Grand father</option>
          <option value="Grand mother">Grand mother</option>
          <option value="Wife">Wife</option>
          <option value="Son">Son</option>
          <option value="Daughter">Daughter</option>
        </select>
      
        <div className='custom-select-container'>
          <button className='btn' type='button' onClick={()=>setOpenPopup(!openPopup)}>{avatar_id} 
            <span>
                {openPopup?
                    <AiFillCaretUp/>
                    :
                    <AiFillCaretDown/>
                }
            </span>
          </button>
          <div className={openPopup ? "open" : ""}>
          {avatar.map((img,index)=>(
              <div key={index} onClick={(e)=>handleClick(e,index)}>
                  <img src={img} alt="Avatar"/>
                  <span>Avatar-{index}</span>
              </div>
          ))}
          </div>
      </div>
        {loading? <div className='loader'></div>:
        <input type='submit' value='Add User'/>
        }
      </form>
    </div>
  )
}

export default AddUser