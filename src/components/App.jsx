import { ThemeProvider } from './ThemeProvider'
import { ModeToggle } from './ThemeToggle'
import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router"
import Home from './pages/Home'
import Projects from './pages/Projects'
import useMousePosition from './CustomHooks'
import '../css/css-reset.css'
import '../css/App.css'

function App({children}) {
  const mousePosition = useMousePosition()

  return (
    
  <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      
      <BrowserRouter>
        <nav>
          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </nav>
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
      <ModeToggle/>
    </ThemeProvider>
  </>
  )
}

export default App
