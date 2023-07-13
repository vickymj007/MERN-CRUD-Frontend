import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>
      <h1>CRUD Operation using MERN stack</h1>
      <div className='route-desc'>
        <h2>Routes</h2>
        <p>Navigate to <Link to='/show-users'>Show User</Link> route to list all the users from the Database</p>
        <p>To create a new user navigate to <Link to='add-user'>Add user</Link> route to add new user to the Database</p>
      </div>
      <div className='api-desc'>
        <h2>API</h2>
        <p>Navigate to <Link to='/show-users'>Show User</Link> route to list all the users from the Database</p>
        <p>To create a new user navigate to <Link to='add-user'>Add user</Link> route to add new user to the Database</p>
      </div>
    </div>
  )
}

export default Home