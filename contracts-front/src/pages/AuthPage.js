import React from 'react'
import NavBar from '../components/NavBar'
import Auth from "../components/Auth";

function AuthPage() {
    return (
        <div className='page'>
            <NavBar/>
            <Auth/>
        </div>
    )
}
export default AuthPage