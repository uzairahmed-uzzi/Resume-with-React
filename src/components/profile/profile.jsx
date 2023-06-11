import React from 'react'
import style from './profile.module.css'
import { FaLocationArrow,FaMailchimp,FaPhone,FaDotCircle,FaLinkedin,FaGlobe } from 'react-icons/fa'

const Profile = () => {
  return (
    <>
    <div className={style.profile}>
        <h2><span className={style.span}>Pro</span>file</h2>
        <div className={style.personalData}>
                <ul >
                    <li><FaLocationArrow/> Based in:</li>
                    <li><FaMailchimp/> Email:</li>
                    <li><FaPhone/> Phone:</li>
                    <li><FaLinkedin/> Linkedin:</li>
                    <li><FaDotCircle/> Fiverr:</li>
                    <li><FaDotCircle/> Upwork:</li>
                </ul>
                <ul>
                    <li>Karachi, Pakistan</li>
                    <li><a href="mailto:uzziahmed74@gmail.com">uzziahmed74@gmail.com</a></li>
                    <li><a href="tel:+923223591811">+92 322 3591811</a></li>
                    <li><a href="#"><FaGlobe/></a></li>
                    <li><a href="#"><FaGlobe/></a></li>
                    <li><a href="#"><FaGlobe/></a></li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default Profile