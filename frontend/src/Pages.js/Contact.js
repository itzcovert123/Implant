import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
       <Link to ="Subpage1">  <h1>Contact</h1> </Link> 
    
    <Outlet/>
    </div>
  )
}
