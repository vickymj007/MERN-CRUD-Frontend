import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    

  return (
    <div className='notfound-page'>
      <h1>The Page you are looking is not found</h1>
      <Link to='/'>Go back to Home</Link>
    </div>
  )
}

export default NotFoundPage