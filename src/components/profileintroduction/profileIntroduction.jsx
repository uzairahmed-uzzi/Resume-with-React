import React from 'react'
import style from './profileintroduction.module.css'
const ProfileIntroduction = () => {
  return (
    <>
    <div className={style.profileIntroduction}>
    <h2><span className={style.span}>Intro</span>duction</h2>
    <div className={style.profileIntroductionContent}>
        <p>I am doing B.S Computer Science from The Federal Urdu University of Arts, Science & Technology , Karachi 
        and I am looking for an opportunity in any organization that will help me polish
         my skills and fulfill the demands of the company.
          I have enthusiasm and dedication that drives me to attain a 
          challenging position as a Web & App Designer/Developer.</p>
          <button className={style.btnDownload}><a href="https://profile.indeed.com/p/pdy23cq" target='_blank' download>Download</a></button>
    </div>
    </div>
    </>
  )
}

export default ProfileIntroduction