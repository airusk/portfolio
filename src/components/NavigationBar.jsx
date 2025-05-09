import { useState } from 'react'
import { NavLink, Link } from "react-router"
import '../css/Navigation-Bar.css'

function NavigationBar() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='navigation-bar'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About me</Link>
        <Link to="/projects" className='link'>Projects</Link>
        <Link to="/links" className='link'>Find me @</Link>
    </div>
  </>
  )
}

export default NavigationBar
