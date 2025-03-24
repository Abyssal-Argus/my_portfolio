import React from 'react';
import bg1 from './bg1.jpg';
import iims from './iims.png';
import sxc from './sxc.png';
import gems from './gems.png';

const Education = () => {
    const edu=[
        {
            institution: 'GEMS School',
            degree: 'Science',
            major: 'Formal Education',
            img: gems,
            startYear: 2009,
            endYear: 2019
        },
        {
            institution: "St. Xavier's College",
            degree: 'SLC',
            img: sxc,
            major: 'Science (Physics)',
            startYear: 2019,
            endYear: 2021
        },
        {
            institution: 'IIMS',
            degree: "Bachelor's in Science (Hons)",
            major: 'Computer Science',
            img:iims,
            startYear: 2024,
            endYear: 'Present'
        },
    ]
  return (
    <div className='text-black h-auto rounded-3xl pb-16'
    style={{
            backgroundImage: `url('${bg1}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
            id='edu'>
      <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className='text-center py-7 text-rose-600 text-2xl md:text-4xl font-extrabold libre-bodoni'>Education</h1>
      <div className='flex justify-center items-center text-center gap-x-3 md:gap-x-10'>
        {edu.map((item, index) => (
          <div data-aos='flip-right' data-aos-duration='1200' data-aos-delay={500 + index * 300} key={index} className='flex flex-col w-32 md:w-56 h-56 md:h-72 bg-gray-300 bg-opacity-50 dark:bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg'>
            <div>
            <h3 className='py-4 font-bold text-sm md:text-xl'>{item.institution}</h3>
            </div>
            <div className='flex justify-center items-center'>
                <img src={item.img} className='h-16 md:h-28' />
            </div>
            <div className='py-2 text-sm'>
              {item.degree}
              <div>
                <div className='py-2 text-xs'>
               {item.major} 
                </div>
              {item.startYear} - {item.endYear}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education