import { Link } from "react-router"
import { useTheme } from "./ThemeProvider"
import '../css/navigation-bar.css'
import moon from '../assets/icons/moon-regular.svg'
import sun from '../assets/icons/sun-regular.svg'

function NavigationBar() {
  const resumeUrl = 'https://raw.githubusercontent.com/airusk/portfolio/main/src/assets/Kevin%20Suriawijaya%20Resume.pdf'
  const { setTheme, theme } = useTheme()
  const lightswitch = theme == 'dark' ? sun : moon 

  return (
  <>
    <div className='header'>
      <div className='navigation-bar'>
        <div>
          <Link to="/" className='link home'>
            <span className='home-name'>kevin suriawijaya</span>
            <span className='home-short'>home</span>
          </Link>
        </div>
        <Link to="/about" className='link'>about</Link>
        <Link to="/projects" className='link'>projects</Link>
        <Link to="/blog" className='link'>blog</Link>
        <a className='resume link' href={resumeUrl} target="_blank">resume</a>
      </div>
      <div className='switches'>
        <div className='switch'>
          <img src={lightswitch} alt="" className='lightswitch'onClick={() => {setTheme(theme == 'dark' ? 'light' : 'dark')}}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default NavigationBar
