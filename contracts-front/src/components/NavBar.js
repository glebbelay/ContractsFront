import React from 'react'
import '../css/forum.css'
import { useState } from 'react';
import AddPost from './AddPost'
import { Link } from 'react-router-dom'

function NavBar() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const handleDropdownToggle1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  return (
    <>
    <div>    
        <div className='button-block'>

        <Link to='/' style={{ textDecoration: 'none' }}>
        <button className='profile-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
        </svg>
        </button>
        </Link>


        <button className='profile-button' onClick={handleDropdownToggle1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
        </svg>
        </button>
 

        <Link to='/profile' style={{ textDecoration: 'none' }}>
        <button className='profile-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
        </button>
        </Link>
        </div>
    
    </div>
    {showDropdown1 ? (
    <div className='add-post'>
    <AddPost handleDropdownToggle1={handleDropdownToggle1}/>
    </div>
    ) : (
      <></>
    )}
    </>
  )
}

export default NavBar