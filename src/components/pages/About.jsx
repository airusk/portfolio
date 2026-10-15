import avatar from '../../assets/images/avatar3.png'
import '../../css/about.scss'

function About() {
  return (
  <>
    <div className='about'>
      <img className="avatar" src={avatar} alt="illustration of me" />
      <div className='about-me text'>
        <div className='sub-heading-box'>
          <h1 className='sub-heading'>
            about
          </h1>
        </div>
        <p className='body-text'>
          I'm a designer who worries a whole lot about how things work. Still, I always find myself striving to delight.
          Currently I'm based in Los Angeles getting my M.S. in Interactive Media & Game Design at USC. Prior to that I have worked as a Software Engineer for more than a few years, and almost a decade ago I earned my B.S. in Computer Science & Game Design from UC Santa Cruz.
          I've felt lucky to grow up in a place with four seasons, and maybe more lucky now to find myself in a place with just two of them now.       
        </p>
        <p className='body-text'>
          I began my career in software engineering, and time and time again I was reminded by how much I enjoyed the design aspect of my work when it did come up.
          When it's not something game-related, I spend a lot of my free time bouldering, running, or cooking.
        </p>
      </div>
    </div>
  </>
  )
}

export default About
