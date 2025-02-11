import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Timer from './Timer'
import useMousePosition from './CustomHooks'
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)
  const mousePosition = useMousePosition()

  return (
  <>
    <Home/>
    {/* <Timer/> */}
    {/* <h1>Mouse Pos: {JSON.stringify(mousePosition)}</h1> */}
  </>
  )
}

export default App
