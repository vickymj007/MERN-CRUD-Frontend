import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { avatar } from '../avatar/avatar'
import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai'
import { toast } from 'react-toastify'
import { url } from '../url'

const EditUser = () => {
    const {id} = useParams()

    const [currentContact, setCurrentContact] = useState(null)
    const [name,setName]= useState("")
    const [contact,setContact]= useState("")
    const [relation,setRelation]= useState("")
    const [avatar_id,setAvatar_id]= useState("Choose Avatar")
    const [loading,setLoading]= useState(false)
    const [openPopup,setOpenPopup]= useState(false)
    
    const navigate = useNavigate()

    const popUpRef = useRef(null)

    useEffect(()=>{
        axios.get(`${url}/users/${id}`)
        .then(response=>{
            setCurrentContact(response.data)
            setName(response.data.name)
            setContact(response.data.contact_number)
            setRelation(response.data.relation)
            setAvatar_id(response.data.avatar_id)
        })
        .catch(error=>{
            console.log(error);
        })
    },[id])

    useEffect(()=>{
      const handleOutsideClick = (e)=>{
        if(!popUpRef.current.contains(e.target)){
          setOpenPopup(false)
        }
      }
      document.addEventListener('mousedown',handleOutsideClick)
      return ()=> document.removeEventListener('mousedown',handleOutsideClick)
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(contact.toString().length !== 10) return toast.warn("Please enter a 10 digit number");
        if(relation === "Choose relation" || relation === "") return toast.warn("Please choose relation");
        if(avatar_id === "Choose Avatar") return toast.warn("Please choose Avatar");
        setLoading(true)

        const updatedContact = {
        name,
        contact_number:+contact,
        relation,
        avatar_id
        }

        axios.put(`${url}/users/${id}`,updatedContact)
        .then(response =>{
        toast.success("Updated Contact Details👍")
        setLoading(false)
        navigate('/show-contacts')
        })
        .catch(error => {
        toast.error(error.response.data.message)
        setLoading(false)
        })
    }
    const handleClick = (e,index)=>{
        setAvatar_id(index)
        setOpenPopup(false)
      }

  return (
    <>
        {currentContact ?
        (<div className='add-user'>
        <form onSubmit={handleSubmit}>
          <h2>Update Contact details</h2>
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
        
          <select value={relation} onChange={(e)=>setRelation(e.target.value)} required>
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
            <div className={openPopup ? "open" : ""} ref={popUpRef}>
            {avatar.map((img,index)=>(
                <div key={index} onClick={(e)=>handleClick(e,index)}>
                    <img src={img} alt="Avatar"/>
                    <span>Avatar-{index}</span>
                </div>
            ))}
            </div>
        </div>
          {loading? <div className='loader'></div>:
          <input type='submit' value='Update Contact'/>
          }
          <input type='button' value='Cancel' onClick={()=>navigate('/show-contacts')}/>
        </form>
      </div>):
      (<div className='loader'></div>)}
    </>
  )
}

export default EditUser