import { useState } from 'react'
import { NavLink, Link } from "react-router"
import '../css/Navigation-Bar.css'

function NavigationBar() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='navigation-bar'>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/me">About me</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/links">Find me @</Link>
      </div>
    </div>
  </>
  )
}

export default NavigationBar
