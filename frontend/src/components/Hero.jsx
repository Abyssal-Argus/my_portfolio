import React from 'react'
import { MdDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import heropic from './heropic.png';
import bg from './bg.jpg';

const Hero = () => {
  return (
    <>
    <div className='h-auto pb-9 md:pb-48 w-auto' style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        overflow: 'hidden',
    }} id='homepage'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch relative top-28 gap-x-5'>
            <div className='relative top-24 libre-bodoni'>
                <h1 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300' className='text-3xl md:text-6xl font-bold text-white'>Hi,</h1>
                <p data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500' className='text-3xl md:text-6xl text-white'>I'm <span className='text-rose-600'>Aaryan</span></p>
                <p data-aos='fade-right' data-aos-duration='1000' data-aos-delay='700' className='text-lg md:text-2xl text-white poppins-medium'>React Developer</p>
                <div className='flex gap-4 md:flex-col text-white relative top-5 lg:top-24'>
                    <a href="https://www.instagram.com/aaryan_.__._/" target="_blank" className='hover:text-rose-600 transition-colors duration-300'><FaInstagram data-aos='fade-right' data-aos-duration='1000' data-aos-delay='900' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                    <a href="https://github.com/Abyssal-Argus" target="_blank" className='hover:text-rose-600 transition-colors duration-300'><LuGithub data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1100' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                    <a href="https://www.linkedin.com/in/aaryan-shrestha-0236362b4/" target="_blank" className='hover:text-rose-600 transition-colors duration-300'><AiOutlineLinkedin data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1300' className='h-6 w-6 md:h-8 md:w-8 mb-2'/></a>
                    <button id='butt' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='600' className='text-rose-600 flex items-center space-x-2 md:hidden'>
                <span>Download CV</span>
                <MdDownload className="w-5 h-5" />
                </button>
                </div>
            </div>
            <div className='pt-28 lg:pt-0 pb-48 md:pb-0' data-aos='flip-up' data-aos-duration='1200' data-aos-delay='500'>
                <img className='w-[29rem] relative top-16 lg:top-0' src={heropic} alt='Placeholder' />
            </div>
            <div className='hidden md:block'>
                <div className='text-white relative top-24'>
                <div className='text-center lg:text-start'>
                <h2 data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300' className='text-rose-600 pb-5 text-2xl lg:text-4xl'>Based in Nepal</h2>
                <h2 data-aos='fade-left' data-aos-duration='1000' data-aos-delay='500' className='text-md lg:text-2xl'>I'm a react developer and</h2>
                <h2 data-aos='fade-left' data-aos-duration='1000' data-aos-delay='700' className='text-md lg:text-2xl'>UI/UX designer.</h2>
                </div>
                <div className='text-gray-400 pt-10'>
                <p data-aos='fade-left' data-aos-duration='1000' data-aos-delay='900'>I'm currently majoring in computer science</p>
                <p data-aos='fade-left' data-aos-duration='1000' data-aos-delay='900'>at IIMS College, Dhobidhara and</p>
                <p data-aos='fade-left' data-aos-duration='1000' data-aos-delay='900'>interning as a react developer at Alpas.</p>
                <div className='pt-20 hidden md:block'>
                <button id='butt' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='1100' className='text-rose-600 flex items-center space-x-2'>
                <span>Download CV</span>
                <MdDownload className="w-5 h-5" />
                </button>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero