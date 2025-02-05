import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, Home } from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
)
