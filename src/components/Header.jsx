import React from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'
function Header({setOpen,open}) {
  return (<>
    <nav>
      <NavContent setOpen={setOpen}/>
      </nav>
      <button className='btn' onClick={()=>setOpen(!open)}>
        <AiOutlineMenuFold/>
      </button>
      </>
  )
}
export const Miniheader = ({open,setOpen}) => {
  return (
    <div className={`navMini ${open?"navMiniComes":"" }`}>
        <NavContent setOpen={setOpen}/>
    </div>
  )
}
export const NavContent=({setOpen})=>{
  return<>
    <h2>Krishna_Sasank.</h2>
    <div>
      <a href='#home' onClick={()=>setOpen(false)}>Home</a>
      <a href='#work' onClick={()=>setOpen(false)}>Projects</a>
      <a href='#skills' onClick={()=>setOpen(false)}>Skills</a>
      <a href='#profile' onClick={()=>setOpen(false)}>Profiles</a>
      <a href='#contact' onClick={()=>setOpen(false)}>Contact</a>
    </div>
    <a href='mailto:krishnatss999@gmail.com'>
      <button>Email</button>
    </a>
  </>
}

export default Header