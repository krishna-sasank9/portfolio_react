import React from 'react'
import flogo from '../assets/flogo.jpg'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'
import {AiOutlineArrowUp,} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
        <div>
            <img src={flogo} alt="my"/>
            <h2>Krishna Sasank TSS</h2>
            <h5>© 2023 T S S Krishna Sasank-Portolio. All rights reserved.</h5>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.linkedin.com/in/krishna-sasank-5212a5256/" target='blank'> <BsLinkedin/> </a>
                <a href='https://github.com/krishna-sasank9' target='blank'><BsGithub/></a>
                <a href='https://www.instagram.com/krishna_sasank_9/' target='blank'><BsInstagram/></a>
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer