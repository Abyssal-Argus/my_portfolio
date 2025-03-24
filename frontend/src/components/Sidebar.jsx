import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import Toggler from './Toggler';

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};
const Sidebar = () => {
const [open, setOpen] = useState(false);
  return (
    <motion.div animate={open ? "open" : "close"} initial='close'>
      <motion.div 
        className='fixed top-0 left-0 w-[400px] h-screen bg-white z-40' 
        variants={variants}
      >
        <Links/>
      </motion.div>
      <Toggler setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;