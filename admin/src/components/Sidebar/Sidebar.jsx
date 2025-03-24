import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to={'/add'} className="sidebar-option">
            <ion-icon name="add-circle-outline"></ion-icon>
                <p>Add Items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to={'/list'} className="sidebar-option">
                <ion-icon name="bag-check-outline"></ion-icon>
                <p>List Items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to={'/orders'} className="sidebar-option">
                <ion-icon name="bag-check-outline"></ion-icon>
                <p>Order </p>
            </NavLink>
        </div>

    </div>
  )
}

export default Sidebar