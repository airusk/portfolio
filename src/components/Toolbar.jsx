import { useState } from 'react'
import '../css/Home.css'

function Home() {
  function setColorMode(newValue) {
  const root = window.document.documentElement;

  // 1. Update React color-mode state
  rawSetColorMode(newValue);

  // 2. Update localStorage
  localStorage.setItem('color-mode', newValue);

  // 3. Update each color
  root.style.setProperty(
    '--color-text',
    newValue === 'light' ? COLORS.light.text : COLORS.dark.text
  );
  root.style.setProperty(
    '--color-background',
    newValue === 'light' ? COLORS.light.background : COLORS.dark.background
  );
  root.style.setProperty(
    '--color-primary',
    newValue === 'light' ? COLORS.light.primary : COLORS.dark.primary
  );
}

  return (
  <>
    <div className='HomePage'>
      <h1>
        About me
      </h1>
      <h1>
        Projects
      </h1>
      <h1>
        Contact
      </h1>
    </div>
  </>
  )
}

export default Home
