import { ThemeProvider } from './ThemeProvider'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import NavigationBar from './NavigationBar'
import SmallDisplayBar from './SmallDisplayBar'
import '../css/css-reset.css'
import '../css/app.css'

function App({children}) {

  return (
    
  <>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter basename = '/portfolio'>
        <SmallDisplayBar/>
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
