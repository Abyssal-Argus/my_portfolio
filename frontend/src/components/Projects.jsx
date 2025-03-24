import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import pj1 from "./pj1.PNG";
import pj2 from "./pj2.PNG";
import pj3 from "./pj3.PNG";
import pj4 from "./pj4.PNG";
import pj5 from "./pj5.PNG";
import pj6 from "./pj6.PNG";
import bg4 from './bg4.jpg';
import html from './html5.png';
import css from './css3.png';
import tailw from './Tailwind.png';
import mysql from './Mysql.png';
import js from './js.png';
import react from './react.png';
import python from './python.png';
import django from './django.png';
import djangorest from './djangorest.png';
import java from './java.png';
import bg from './bg.jpg';

const ProjectPage = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleDisplay=(index)=>{
    setVisible(index);
  }

  const handleExit=()=>{
    setVisible(false);
  }

  const projects=[
    {
      id:1,
      projpic:pj1,
      projname:'Benelli Website',
      projdesc:'My love for benelli made me create this website using Django, this page shows details about various benelli bikes.',
      url:'https://github.com/Abyssal-Argus/Benelli'
    },
    {
      id:2,
      projpic:pj2,
      projname:'Ecommerce website',
      projdesc:'A Djnago project that allows users to register and auction their products.',
      url:'https://github.com/Abyssal-Argus/COMMERCE'
    },
    {
      id:3,
      projpic:pj3,
      projname:'Pokemon Card Generator',
      projdesc:"This is a vanilla JavaScript project that randomly generates pokemon(till Kalos region) and displays it's stats.",
      url:'https://github.com/Abyssal-Argus/pokemon-card-generator'
    },
    {
      id:4,
      projpic:pj4,
      projname:'Weather App',
      projdesc:'Gives accurate real-time weather information of the location you have enetered.',
      url:'https://github.com/Abyssal-Argus/weather-app'
    },
    {
      id:5,
      projpic:pj5,
      projname:'NepAir(Frontend)',
      projdesc:"Herald college's final year project(frontend only), which I made using react.",
      url:'https://github.com/Abyssal-Argus/Nepair'
    },
    {
      id:6,
      projpic:pj6,
      projname:'Custom Portfolio',
      projdesc:"Allows you to generate your own portfolio with the information you have provided.",
      url:'https://github.com/Abyssal-Argus/custom-portfolio'
    },
  ]

  const tech=[
    {
      techpic:html,
      progress: 95,
    },
    {
      techpic:css,
      progress: 80,
    },
    {
      techpic:tailw,
      progress: 75,
    },
    {
      techpic:mysql,
      progress: 60,
    },
    {
      techpic:js,
      progress: 75,
    },
    {
      techpic:react,
      progress: 70,
    },
    {
      techpic:python,
      progress: 75,
    },
    {
      techpic:django,
      progress: 65,
    },
    {
      techpic:djangorest,
      progress: 48,
    },
    {
      techpic:java,
      progress: 50,
    },
  ]

  return (
  <>
      <div
            style={{
                    backgroundImage: `url('${bg4}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }}
                    className='rounded-3xl'
    id='project'>
      <div>
      <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className='text-center py-7 text-2xl md:text-4xl font-extrabold libre-bodoni text-rose-600'>Projects</h1>
      </div>
      <div className='h-auto flex items-center justify-center pb-10'>
        <div className='max-w-5xl overflow-x-hidden hidden md:block'  data-aos='fade-up' data-aos-duration='1200' data-aos-delay='500'>
          <Swiper
            breakpoints={
              {
                0: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }
            }
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            className='w-full'
          >
            {projects.map((project, index) => (
                            <SwiperSlide key={index}>
  <div className='h-[26rem] flex' onMouseEnter={()=>handleDisplay(index)} onMouseLeave={handleExit}>
    <div
      className={`card ${active === index ? 'card-active' : ''} grid content-end`} style={{ backgroundImage: `url(${project.projpic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className='text-2xl mt-5 font-bold text-rose-600' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}}>{project.projname}</h2>
      <div className='flex justify-center pt-5'>
      <a href={project.url} className={`py-2 px-4 rounded-md text-white bg-rose-600 hover:bg-rose-700 w-36 ${visible===index?'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>View project</a>
      </div>
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='h-auto flex flex-col justify-center items-center gap-y-8 md:hidden pb-14'>
          {projects.map((project) =>(
            <div key={project.id} 
            style={{
              backgroundImage: `url('${project.projpic}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              }}
            className='flex flex-col font-bold rounded-3xl justify-center text-center text-rose-600 w-3/4 h-96'
            data-aos='flip-up' data-aos-duration='1200' data-aos-delay={500 + project.id * 100}>
              <h1 className='mt-48' style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}}>{project.projname}</h1>
              <h1 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}}>{project.projdesc}</h1>
              <div className='flex justify-center mt-5'>
              <a href={project.url} className='py-2 px-4 rounded-md text-white bg-rose-600 hover:bg-rose-700 w-36'>View Project</a>
              </div>
            </div>
          ))}
        </div>
    </div>
    <div className='h-auto py-10'
        style={{
            backgroundImage: `url('${bg}')`,
            backgroundSize: 'cover',
            overflow: 'hidden',
        }}
    id='tech'>
      <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className='text-rose-600 text-center text-2xl md:text-4xl font-extrabold libre-bodoni'>Tech Stack</h1>
      <div className='h-auto py-10'>
        <div className='flex justify-center items-center gap-16 flex-wrap pb-8'>
          {tech.map((tech, index) => (
            <div key={index}>
              <div className=' transition-transform duration-500 hover:-translate-y-3'>
              <img src={tech.techpic} data-aos='fade-out' data-aos-duration='1200' data-aos-delay='300' className='w-24 h-28' />
              </div>
              <div  data-aos='zoom-in' data-aos-duration='1200' data-aos-delay='500' className="w-24 h-2 bg-gray-300 rounded-full mt-5">
                  <div
                    className="h-full bg-rose-600 rounded-full transition-all duration-150 hover:shadow-[0_0_10px_2px_rgba(225,29,72,0.8)]"
                    style={{ width: `${tech.progress}%` }}
                    data-aos='fade-right' data-aos-duration='1200' data-aos-delay='800'
                  ></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default ProjectPage;