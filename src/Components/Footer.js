import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <p>Follow me</p>
            <div>
                <a rel='noopener noreferrer' target="_blank" href='https://www.facebook.com/vicky.viperrr'><BsFacebook/></a>
                <a rel='noopener noreferrer' target="_blank" href='https://www.instagram.com/vicky_m_j/'><BsInstagram/></a>
                <a rel='noopener noreferrer' target="_blank" href='https://www.linkedin.com/in/vignesh-m-780423132/'><BsLinkedin/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer