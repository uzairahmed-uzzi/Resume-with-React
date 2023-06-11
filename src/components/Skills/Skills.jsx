import React from 'react'
import style from './Skills.module.css'
const Skills = () => {
  return (
    <>
    <div className={style.skillsContainer}>
    <h2><span className={style.span}>Ski</span>lls</h2>
    <div className={style.skillsContent}>
        <div className={style.skillslist}>HTML</div>
        <div className={style.skillslist}>CSS</div>
        <div className={style.skillslist}>BOOTSTRAP 5</div>
        <div className={style.skillslist}>JS ES6</div>
        <div className={style.skillslist}>NODE JS</div>
        <div className={style.skillslist}>EXPRESS JS</div>
        <div className={style.skillslist}>MONGODB</div>
        <div className={style.skillslist}>PYTHON</div>
        <div className={style.skillslist}>PANDAS</div>
        <div className={style.skillslist}>NUMPY</div>
        <div className={style.skillslist}>C# .NET</div>
        <div className={style.skillslist}>ORACLE</div>

    </div>
    </div>
    </>
  )
}

export default Skills