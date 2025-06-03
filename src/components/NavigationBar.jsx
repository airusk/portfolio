import { useState } from 'react'
import { NavLink, Link } from "react-router"
import { useTheme } from "./ThemeProvider"
import '../css/navigation-bar.css'
import moon from '../assets/icons/moon-regular.svg'
import sun from '../assets/icons/sun-regular.svg'

function NavigationBar() {
  const [count, setCount] = useState(0)
  const resumeUrl = 'https://github.com/airusk/portfolio/blob/main/src/assets/Kevin_Suriawijaya_Resume.pdf'
  const { setTheme, theme } = useTheme()
  const lightswitch = theme == 'dark' ? sun : moon 

  return (
  <>
    <div className='header'>
      <div className='navigation-bar'>
        <div>
          <Link to="/" className='link home'>kevin suriawijaya</Link>
        </div>
        <Link to="/about" className='link'>about</Link>
        <Link to="/projects" className='link'>projects</Link>
        <a className='resume link' href={resumeUrl} target="_blank">resume</a>
      </div>
      <div className='switches'>
        <div className='switch'>
          <img src={lightswitch} alt="" className='lightswitch'onClick={ev => {setTheme(theme == 'dark' ? 'light' : 'dark')}}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default NavigationBar
