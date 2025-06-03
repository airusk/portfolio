import { useTheme } from "./ThemeProvider"
import '../css/navigation-bar.css'
import moon from '../assets/icons/moon-regular.svg'
import sun from '../assets/icons/sun-regular.svg'

function SmallDisplayBar() {
  const { setTheme, theme } = useTheme()
  const lightswitch = theme == 'dark' ? sun : moon 

  return (
  <>
    <div className='small-display-bar'>
        <div className='switches'>
          <div className='switch'>
            <img src={lightswitch} alt="" className='lightswitch'onClick={ev => {setTheme(theme == 'dark' ? 'light' : 'dark')}}/>
          </div>
        </div>
    </div>
  </>
  )
}

export default SmallDisplayBar
