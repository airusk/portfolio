import { useState } from 'react'
import '../../css/home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='homepage'>
      <div>
        <h1>
          Home or whatever
        </h1>
      </div>
    </div>
  </>
  )
}

export default Home
