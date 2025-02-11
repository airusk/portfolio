import { useState } from 'react'
import '../css/Home.css'

function Home() {
  const [count, setCount] = useState(0)

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
        Find Me @
      </h1>
    </div>
  </>
  )
}

export default Home
