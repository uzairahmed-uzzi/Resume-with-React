import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
  return (
    <>
      <div className={style.buttonDesign}>{props.name}</div>
    </>
  )
}

export default Button