import React from 'react'
import {motion} from 'framer-motion'
import {AiFillHtml5,AiFillGithub,} from 'react-icons/ai'
import {BsFiletypeCss,BsGit} from 'react-icons/bs'
import {DiJavascript1,DiReact,DiJqueryLogo,DiNodejsSmall,DiMongodb,} from 'react-icons/di'
function Skills() {
    const animations = {
        whileInView: {
          x: 0,
          y: 0,
          opacity: 1,
        },
        one: {
          opacity: 0,
          x: "-100%",
        },
        two: {
          opacity: 0,
          y: "-100%",
        },
    
        three: {
          opacity: 0,
          x: "100%",
        },
      };
  return (
    <div id="skills">
        <h2>Skills</h2>
        <section>
            <motion.div 
            className='box1' 
            whileInView={animations.whileInView}
            initial={animations.one}
            >
              <h1>Frontend</h1>
              <div>
                <p><AiFillHtml5/> HTML</p>
                <p><BsFiletypeCss/> CSS</p>
                <p><DiJavascript1/> JavaScript</p>
                <p><DiJqueryLogo/> Jquery</p>
                <p><DiReact/> ReactJS</p>
              </div>
            </motion.div>
            <motion.div className='box2'
            whileInView={animations.whileInView}
            initial={animations.two}
            >
              <h1>Backend</h1>
              <div>
                <p><DiNodejsSmall/> NodeJS</p>
                <p>ExpressJS</p>
                <p><DiMongodb/> MongoDB</p>
              </div>
            </motion.div>
            <motion.div className='box3'
            whileInView={animations.whileInView}
            initial={animations.three}
            >
              <h1>Others</h1>
              <div>
                <p><BsGit/> Git</p>
                <p><AiFillGithub/>Github</p>
                <p>Data Structures & Algorithm</p>
                <p>Problem Solving</p>
              </div>
            </motion.div>
        </section>
    </div>
  )
}

export default Skills