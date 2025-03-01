import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import LoginPopUp from '../LoginPopUp/LoginPopUp'
import { useState } from 'react'
const Layout = () => {
    const [showLogin, setShowLogin] = useState(false)

    return (
        <>
            {showLogin ? <LoginPopUp  setShowLogin={setShowLogin} /> : <></>}
            <Navbar setShowLogin={setShowLogin}/>
            <Outlet />

        </>

    )
}

export default Layout