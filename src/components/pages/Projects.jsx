import { useState } from 'react'
import '../../css/Project.css'

function Projects() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='projects'>
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
