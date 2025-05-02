import { useState } from 'react'
// import '../css/Home.css'

function Projects() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='ProjectsPage'>
      <h1>
        Projects
      </h1>
      <ol>
        <li>
          wow amazing
        </li>
      </ol>
    </div>
  </>
  )
}

export default Projects
