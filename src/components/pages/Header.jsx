import { useState } from 'react'

function Moi() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='MoiPage'>
      <img src="../../assets/placeholder.jpg" alt="illustration of me" />
    </div>
  </>
  )
}

export default Moi
