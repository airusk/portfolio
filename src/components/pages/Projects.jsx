import { useState } from 'react'
import '../../css/projects.scss'
import esthumb from '../../assets/images/04.jpg'

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
            <h2 className='project-name'>everybody's sad</h2>
          </div>
          {/* <a href="https://www.youtube.com/watch?v=0hrqvEHoiWI"></a> */}
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
