import React from 'react'
import style from './sidebar.module.css'
import image from './profilepic.jpg'
import { FaFacebookSquare,FaInstagramSquare,FaWhatsappSquare,FaGithubSquare,FaLinkedin } from "react-icons/fa";


const  SideBar= () => {
  return (
    <>
    <div className={style.sidebar}>
      <div className={style.profile_section}>
        <div className={style.coverpic}>
        <img className={style.image} src={image} alt=""/>
        </div>
        <div className={style.profile_body}>
        <h3 className={style.title} >Uzair <span id={style.span}>Ahmed</span></h3>
        <p>Software Engineer | Mern Stack <br/> |&nbsp;&nbsp;&nbsp; .Net Developer &nbsp;&nbsp;&nbsp;|</p>
        <ul>
          <li><a href="https://www.facebook.com/profile.php?id=100064985645828" target="_blank"><FaFacebookSquare  className={style.facebook}/></a></li>
          <li><a href="https://www.instagram.com/uzzi_speaks/" target="_blank"><FaInstagramSquare className={style.instagram}/></a></li>
          <li><a href="https://wa.me/message/MRWDVO53MH5HJ1 " target="_blank"><FaWhatsappSquare className={style.whatsapp}/></a></li>
          <li><a href="https://www.linkedin.com/in/ahmeduzair74/" target="_blank"><FaLinkedin className={style.linkedin}/></a></li>
          <li><a href="https://github.com/uzairahmed-uzzi" target="_blank"><FaGithubSquare className={style.github}/></a></li>
        </ul>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default SideBar