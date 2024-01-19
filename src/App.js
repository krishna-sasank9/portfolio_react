import React from 'react'
import Header from './components/Header'
import { Miniheader } from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
import { useState } from 'react'

function App() {
  const [open,setOpen]=useState(false)
  console.log(open)
  // const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  // useEffect(() => {
  //   const resizeRatio = () => {
  //     setRatio(window.innerWidth / window.innerHeight);
  //   };

  //   window.addEventListener("resize", resizeRatio);

  //   return () => {
  //     window.removeEventListener("resize", resizeRatio);
  //   };
  // }, []);

  return (
  <>
      <Miniheader open={open} setOpen={setOpen}/>
      <Header open={open} setOpen={setOpen}/>
      <Home />
      <Work/>
      <Skills/>
      <Profiles/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App