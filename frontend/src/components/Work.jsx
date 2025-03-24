import React from 'react'
import bg3 from './bg3.jpg';
import alpas from './alpas.jpeg';


const Work = () => {
      const edu=[
          {
              institution: 'Alpas',
              degree: "React Developer",
              major: 'Intern',
              img:alpas,
              startYear: 2024,
              endYear: 'Present'
          }
      ]
  return (
        <div className='h-auto rounded-3xl pb-20'
        style={{
                backgroundImage: `url('${bg3}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }} id='work'>
                  <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className='text-center py-7 text-2xl md:text-4xl font-extrabold libre-bodoni text-rose-600'>Work</h1>
                  <div className='flex justify-center items-center text-center gap-x-3 md:gap-x-10'>
        {edu.map((item, index) => (
          <div data-aos='flip-left' data-aos-duration='1200' data-aos-delay={500 + index * 300} key={index} className='flex flex-col w-40 md:w-56 h-56 md:h-72 text-gray-300 bg-gray-500 bg-opacity-50 dark:bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg'>
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

export default Work