import React from 'react'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from "../assets/logo.jpg"
function Home({ratio}) {
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
          transition:{
            delay:0.5
          }
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Krishna Sasank Tatavarty S S
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Web Developer"],
              autoStart: true,
              loop: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewritereffect",
            }}
          />
          <div className='one'>
          <p>
                A passionate developer with a strong background in computer science and mathematics. Always eager to learn new technologies and contribute to projects that make the world
            </p>
          </div>
          <div>
            <a href="mailto:krishnatss999@gmail.com">My CV.</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          {/* <article>
            <p>
              A passionate developer with a strong background in computer
              science and mathematics. Always eager to learn new technologies
              and contribute to projects that make the world
            </p>
          </article> */}
          {/* <aside>
            <article>
              <p>+3</p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>krishnatss999@gmail.com</span>
            </article>
          </aside> */}
        </div>
      </section>
      <section>
        <img src={me} alt="Krish" />
      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home