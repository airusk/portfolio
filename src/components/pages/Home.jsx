import { useState } from 'react'
import '../../css/Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='HomePage'>
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
