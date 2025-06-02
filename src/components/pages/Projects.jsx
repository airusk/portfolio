import { useState } from 'react'
import '../../css/projects.scss'
import esthumb from '../../assets/images/everybodyssadfull.jpg'
import steam from '../../assets/icons/steam-brands.svg'
import link from '../../assets/icons/link-solid.svg'
import youtube from '../../assets/icons/youtube-brands.svg'

function Projects() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='projects'>
      <div className='sub-heading-box'>
        <h1 className='sub-heading'>
          projects
        </h1>
      </div>
      <div className='project-cards'>
        <div className='project-card'>
          <div className='image-box'>
            <img src={esthumb} className='card-image' alt="" />
          </div>
          <div className='card-description'>
            <h2 className='project-title'>everybody's sad</h2>
            <p className='project-description'>
              A light-hearted VR game about self-care.
            </p>
            <p className='project-description'>
              I was primarily a developer and designer on this project but it was a small team so we wore multiple hats.
            </p>
            <p className='project-description'>
              We received the <a href="https://ludolab.ucsc.edu/gamego/">GameGo</a> grant. After which we showcased everybody's sad at <a href="https://www.indiecade.com/2018-games/everybodys-sad/">Indiecade</a> in 2018, the <a href="https://www.intel.com/content/www/us/en/developer/topic-technology/gamedev/overview.html">Intel Game Dev</a> panel at <a href="https://gdconf.com/">GDC</a>, and <a href="https://dreamhack.com/">DreamHack Indie Playground</a> 
            </p>
            <div className='project-links'>
              <a href="https://store.steampowered.com/app/898080/everybodys_sad/" target="_blank"><img src={steam} className='project-link' alt="steam"/></a>
              <a href="https://lynnfactor.wixsite.com/everybodyssad" target="_blank"><img src={link} className='project-link' alt="website"/></a>
              <a href="https://www.youtube.com/watch?v=0hrqvEHoiWI" target="_blank"><img src={youtube} className='project-link' alt="youtube"/></a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <h2 className='project-name'>little ones</h2>
        </div>
        <div className='project-card'>
          <h2 className='project-name'>boneappletea</h2>
        </div>
        <div className='project-card'>
          <h2 className='project-name'>WhatNow</h2>
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects
