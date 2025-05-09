import { useState } from 'react'
import avatar from '../../assets/placeholder.jpg'
import '../../css/about.css'

function About() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='about'>
      <img className="avatar" src={avatar} alt="illustration of me" />
      <h2>hello, it's me kev</h2>
      <h3>
        I make things like website. I also bake things like bread. And I strive to be a better friend. But most importantly, I try to be a good person otherwise I'd have trouble sleeping at night.
      </h3>
    </div>
  </>
  )
}

export default About
