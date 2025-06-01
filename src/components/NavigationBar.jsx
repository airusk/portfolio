import { useState } from 'react'
import { NavLink, Link } from "react-router"
import { useTheme } from "./ThemeProvider"
import '../css/Navigation-Bar.css'
import lightbulb from '../assets/icons/lightbulb-regular.svg'

function NavigationBar() {
  const [count, setCount] = useState(0)
  const { setTheme, theme } = useTheme()

  return (
  <>
    <div className='header'>
      <div className='navigation-bar'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About me</Link>
        <Link to="/projects" className='link'>Projects</Link>
        <Link to="/links" className='link'>More?</Link>
      </div>
      <div className='switches'>
        <img src={lightbulb} alt="" className='lightswitch'onClick={ev => {setTheme(theme == 'dark' ? 'light' : 'dark')}}/>
      </div>
    </div>
  </>
  )
}

export default NavigationBar
