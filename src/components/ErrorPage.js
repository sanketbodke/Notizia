import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import '../styles/ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className='errorContainer'>
       <div className="icon">
       <FontAwesomeIcon icon={faTriangleExclamation} />
       </div>
       <div className="errorTitle">
        <p>Oops! Something Went Wrong.</p>
        <span>This page didn't load.</span>
       </div>
    </div>
  )
}
