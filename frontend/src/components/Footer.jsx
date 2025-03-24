import React from 'react';
import bg from './foot.jpg';
import logo from './logo.png';

const Footer = () => {
  return (
    <>
        <div
          className='text-black md:h-52 h-40  rounded-3xl pb-16 relative'
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
            <div className='flex justify-center pt-5'>
            <p className='font-bold text-lg md:text-2xl text-rose-600' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>© Aaryaniverse - All Rights Reserved</p>
            </div>
    </div>
    </>
  )
}

export default Footer