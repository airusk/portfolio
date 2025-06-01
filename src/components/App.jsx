import { ThemeProvider } from './ThemeProvider'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import NavigationBar from './NavigationBar'
import useMousePosition from './CustomHooks'
import '../css/css-reset.css'
import '../css/App.css'

function App({children}) {
  const mousePosition = useMousePosition()

  return (
    
  <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/projects" element={<Projects/>}/>
            <Route path = "/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
  )
}

export default App
