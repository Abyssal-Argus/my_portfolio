import React from 'react'
import Sidebar from './Sidebar'
import {motion} from "framer-motion"
import logo from './logo.png';

const Nav = () => {

  return (
    <div className='h-[100px] z-50 bg-transparent poppins-medium absolute top-0 w-full'>
        <div className='flex items-center justify-between m-auto h-full'>
          <div>
            <Sidebar/>
          </div>
          <div className='pr-7'>
              <a href="/"><motion.img src={logo} className='w-64' alt=""  initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}/></a>
          </div>
        </div>
    </div>
  )
}

export default Nav