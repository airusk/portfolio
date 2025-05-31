import { useState } from 'react'
import avatar from '../../assets/avatar.png'
import '../../css/about.css'
import {dateDiffInDays} from '../utils/DateFunctions'

function About() {
  const [count, setCount] = useState(0)
  const startedClimbing = new Date('2020/06/17')
  const today = new Date()

  const sinceDayOne = dateDiffInDays(startedClimbing, today)
  const [deltaYears, deltaDays] = [Math.floor(sinceDayOne/365), sinceDayOne%365]
  const daysString = deltaDays == 0 ? "" : `and ${deltaDays} days `
  if (deltaDays == 1){
    daysString = 'and 1 day'
  }
  
  return (
  <>
    <div className='about'>
      <img className="avatar" src={avatar} alt="illustration of me" />
      <div className='about-me text'>
        <h2>Bio</h2>
        <p className='body'>
          I grew a little in Ontario and grew a lot in California.
          <br /> <br />
          I thought sports of any kind weren't for me growing up but it's been {deltaYears} years {daysString}since I started climbing. 
        </p>
      </div>
    </div>
  </>
  )
}

export default About
