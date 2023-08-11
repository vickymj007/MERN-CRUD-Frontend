import React from 'react'
import { Link } from 'react-router-dom'
import contact_img from './contact1.jpg'

function Home() {
  return (
    <div className='home-page'>
      <h1>Contact Manager App</h1>
      <div>
        <div className='route-desc'>
          <h2>CRUD App using MERN Stack</h2>
          <p>Welcome to the Contact manager app where you can create, edit and delete your contact.</p>
          <p>Click the <Link to='/show-contacts'>Contacts</Link> button on the Navbar to show existing contacts.</p>
          <p>You can add new contact by clicking the <Link to='/add-contact'>Add Contact</Link> button on the Nav bar.</p>
          <p>You can Edit and Delete contact using the button listed on the contact card.</p>
        </div>
        <img src={contact_img} alt='contact logo'/>
      </div>
    </div>
  )
}

export default Home