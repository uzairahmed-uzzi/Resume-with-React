import React from 'react'
import Button from '../buttons/Button'
import style from './Skills.module.css'
const Skills = () => {
  return (
    <>
    <div className={style.skillsContainer}>
    <h2><span className={style.span}>Ski</span>lls</h2>
    <div className={style.skillsContent}>
        <Button name="HTML"/>
        <Button name="CSS"/>
        <Button name="JS ES6"/>
        <Button name="BOOTSTRAP"/>
        <Button name="PYTHON"/>
        <Button name="PANDAS"/>
        <Button name="NUMPY"/>
        <Button name="NODE"/>
        <Button name="EXPRESS"/>
        <Button name="MONGO"/>
        <Button name="C# .NET"/>
        <Button name="MS OFFICE"/>
    </div>
    </div>
    </>
  )
}

export default Skills