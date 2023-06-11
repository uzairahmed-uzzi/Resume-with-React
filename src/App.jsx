import React from 'react'
import style from './App.module.css'
import SideBar from './components/sidebar/sidebar'
import Profile from './components/profile/profile'
import ProfileIntroduction from './components/profileintroduction/profileIntroduction'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <>
    <div className={style.container}>
    <SideBar/>
    <div className={style.profile_container}>
    <div className={style.item1}><Profile/></div>
    <div className={style.item2}><ProfileIntroduction/></div>
    <div className={style.item3}><Skills/></div>
    </div>
    
    </div>
    </>
  )
}

export default App