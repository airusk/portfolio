import { useState } from 'react'
import '../../css/home.scss'
import github from '../../assets/icons/github-brands.svg'
import linkedin from '../../assets/icons/linkedin-brands.svg'
import mail from '../../assets/icons/paper-plane-solid.svg'

function Home() {

  return (
  <>
    <div className='homepage'>
      <div>
        <div className='big-ol-div'></div>
        <h1 className='home-statement'>
          it aint much but it's home.
        </h1>
        <div className='socials'>
          <a href="https://github.com/airusk" target="_blank"><img src={github} className='social-link' alt="github"/></a>
          <a href="https://www.linkedin.com/in/ksuriawijaya/" target="_blank"><img src={linkedin} className='social-link' alt="linkedin"/></a>
          <a href="mailto:ksuriawijaya@gmail.com?Subject=Regarding%20Your%20Portfolio" target="_blank"><img src={mail} className='social-link' alt="mail"/></a>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
