import { ThemeProvider } from './ThemeContext'
import { GlobalStyles } from './GlobalStyles'
import Home from './Home'
import useMousePosition from './CustomHooks'
import '../css/App.css'

function App() {
  const mousePosition = useMousePosition()

  return (
  <>
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  </>
  )
}

export default App
