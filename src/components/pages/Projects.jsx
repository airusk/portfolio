import { useState } from 'react'
import '../../css/projects.scss'
import esthumb from '../../assets/images/everybodyssadfull.jpg'
import ba from '../../assets/images/01.jpg'
import lo from '../../assets/images/02.jpg'
import wn from '../../assets/images/03.jpg'
import steam from '../../assets/icons/steam-brands.svg'
import link from '../../assets/icons/link-solid.svg'
import youtube from '../../assets/icons/youtube-brands.svg'
import github from '../../assets/icons/github-brands.svg'

function Projects() {

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
            <h2 className='project-title'>everybody&apos;s sad</h2>
            <p className='project-description'>
              A light-hearted virtual reality game focused on themes of humor and self-care.
            </p>
            <p className='project-description'>
             Developed as part of a small, tight-knit team, I served primarily as a developer and designer—though in a team of our size ( 12 members ), everyone contributed across disciplines. The game was built in Unity using C#, with support for the HTC Vive through the SteamVR library.
            </p>
            <p className='project-description'>
              We received the <a href="https://ludolab.ucsc.edu/gamego/">GameGo</a> grant. After which we showcased everybody&apos;s sad at <a href="https://www.indiecade.com/2018-games/everybodys-sad/">Indiecade</a> in 2018, the <a href="https://www.intel.com/content/www/us/en/developer/topic-technology/gamedev/overview.html">Intel Game Dev</a> panel at <a href="https://gdconf.com/">GDC</a>, and <a href="https://dreamhack.com/">DreamHack Indie Playground</a> 
            </p>
            <div className='project-links'>
              <a href="https://store.steampowered.com/app/898080/everybodys_sad/" target="_blank"><img src={steam} className='project-link' alt="steam"/></a>
              <a href="https://lynnfactor.wixsite.com/everybodyssad" target="_blank"><img src={link} className='project-link' alt="website"/></a>
              <a href="https://www.youtube.com/watch?v=0hrqvEHoiWI" target="_blank"><img src={youtube} className='project-link' alt="youtube"/></a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='image-box'>
            <img src={ba} className='card-image' alt="" />
          </div>
          <div className='card-description'>
            <h2 className='project-title'>boneappletea</h2>
            <p className='project-description'>
              A full-stack clone of the popular recipe and publication website <i>Bon Appétit</i>.
            </p>
            <p className='project-description'>
              This project was an exercise in designing a visually appealing and fully functional web application with features including user authentication, full CRUD operations, and a relational database.
            </p>
            <ul className='techstack-list'>
              <li>
                <b>Backend</b>: Ruby on Rails with PostgreSQL for data management
              </li>
              <li>
                <b>Frontend</b>: JavaScript with React and Redux, styled with HTML5 and CSS3
              </li>
              <li>
                <b>File Storage</b> : AWS S3 for handling image and media uploads
              </li>
              <li>
                <b>Deployment</b>: Originally hosted on Heroku
              </li>
            </ul>
            <p className='project-description'>
              While the live version is no longer active due to deprecated hosting and tooling updates, the complete source code remains available publicly. You can explore code samples and feature demos on <a href="https://github.com/airusk/boneappletea">github</a>.
            </p>
            <div className='project-links'>
              <a href="https://github.com/airusk/boneappletea" target="_blank"><img src={github} className='project-link' alt="github"/></a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='image-box'>
            <img src={lo} className='card-image' alt="" />
          </div>
          <div className='card-description'>
            <h2 className='project-title'>little ones</h2>
            <p className='project-description'>
              A lightweight, audio-centric browser-based sandbox experience.
            </p>
            <p className='project-description'>
              This was a small project developed over the course of a week, focused on creating an engaging experience using only HTML, CSS, and vanilla JavaScript—without the aid of external libraries or frameworks.
            </p>
            <div className='project-links'>
              <a href="https://airusk.github.io/little-ones/" target="_blank"><img src={link} className='project-link' alt="website"/></a>
              <a href="https://github.com/airusk/little-ones/tree/master/javascripts" target="_blank"><img src={github} className='project-link' alt="github"/></a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='image-box'>
            <img src={wn} className='card-image' alt="" />
          </div>
          <div className='card-description'>
            <h2 className='project-title'>What Now</h2>
            <p className='project-description'>
              A MERN stack web application designed to help users discover spontaneous events and activities happening nearby in real-time.
            </p>
            <ul className='techstack-list'>
              <li>
                <b>Backend</b>: Node.js with Express
              </li>
              <li>
                <b>Frontend</b>: JavaScript with React
              </li>
              <li>
                <b>Database</b>: MongoDB
              </li>
              <li>
                <b>Deployment</b>: Originally hosted on Heroku
              </li>
            </ul>
            <p className='project-description'>
              The live version is no longer active due to deprecated hosting and tooling updates but the complete source code remains available publicly. You can explore code samples and feature demos on github.
            </p>
            <div className='project-links'>
              <a href="https://github.com/stephl3/WhatNow" target="_blank"><img src={github} className='project-link' alt="github"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Projects
