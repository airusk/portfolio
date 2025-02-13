import { ThemeProvider } from './ThemeProvider'
import { GlobalStyles } from './GlobalStyles'
import Home from './Home'
import useMousePosition from './CustomHooks'
import '../css/App.css'

function App({children}) {
  const mousePosition = useMousePosition()

  return (
  <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Home/>
    </ThemeProvider>
  </>
  )
}

export default App
