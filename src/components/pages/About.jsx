import avatar from '../../assets/images/avatar3.png'
import '../../css/about.scss'
import {dateDiffInDays} from '../utils/DateFunctions'

function About() {
  const startedClimbing = new Date('2020/06/17')
  const today = new Date()

  const sinceDayOne = dateDiffInDays(startedClimbing, today)
  const [deltaYears, deltaDays] = [Math.floor(sinceDayOne/365), sinceDayOne%365]
  let daysString = deltaDays == 0 ? "" : `and ${deltaDays} days `
  if (deltaDays == 1){
    daysString = 'and 1 day'
  }
  
  return (
  <>
    <div className='about'>
      <img className="avatar" src={avatar} alt="illustration of me" />
      <div className='about-me text'>
        <div className='sub-heading-box'>
          <h1 className='sub-heading'>
            biography
          </h1>
        </div>
        <p className='body-text'>
          I grew up a little in Ontario and a lot in the coastal cities of California.
          Currently based in Los Angeles, I earned my B.S. in Computer Science with a concentration in Computer Game Design from UC Santa Cruz.
        </p>
        <p className='body-text'>
          Although my passion for games led me to pursue that degree, I began my career in web development—and found a surprising enjoyment in it. I still love games, especially when I get to play with friends, either online or offline.
          These days I spend a lot of my free time rock climbing. I didn&apos;t expect to stick with it at first, but it&apos;s become a real passion—and it&apos;s been {deltaYears} years {daysString} since I started bouldering.
        </p>
      </div>
    </div>
  </>
  )
}

export default About
