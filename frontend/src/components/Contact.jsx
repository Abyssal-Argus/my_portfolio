import React, { useRef,useState } from 'react';
import bg5 from './bg5.jpg';
import { motion, useInView } from 'framer-motion';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

const Contact = () => {
  const [formData, setFormData]=useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMsg, setResponseMsg]=useState("");
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value });
  }
  const touches=[
    {
      id:1,
      name: 'Phone',
      icon: <FaPhone/>,
      detail: '+977-984-0000297'
    },
    {
      id:2,
      name: 'Email',
      icon: <MdEmail/>,
      detail: 'theaaryanshrestha@gmail.com'
    },
    {
      id:3,
      name: 'Address',
      icon: <GiPositionMarker/>,
      detail: 'Lalitpur, Nepal'
    },

  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setResponseMsg("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMsg("Failed to send your message. Please try again later!");
      }
    } catch (error) {
      setResponseMsg("Error, failed to send your message. Please try again later.");
    }
  };

  const handleExit = () => {
    setResponseMsg("");  // Clear message immediately
    setTimeout(() => {
      setResponseMsg(""); // Ensure it stays cleared after re-render
    }, 100); // Small delay to prevent flickering
  };
  

  return (
    <div
      ref={ref}
      className='text-black h-auto rounded-3xl pb-16 relative'
      style={{
        backgroundImage: `url('${bg5}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    id='contact'>
      <h1 data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300' className='text-center py-7 text-rose-600 text-2xl md:text-4xl font-extrabold libre-bodoni'>
        Contact
      </h1>
      <p data-aos='fade-in' data-aos-duration='1000' data-aos-delay='500' className='text-center font-bold text-xl poppins-medium'>
        Want to get in touch? Fill out the form below.
      </p>
      <div className='flex justify-evenly items-center m-auto'>
      <motion.div
        initial={{ opacity: 1 }}
        className='stroke-rose-600 absolute md:static'
        transition={{ delay: 3, duration: 1 }}
        data-aos='slide-up' data-aos-duration='1500' data-aos-delay='500'
      >
        <svg width="350px" height="350px" viewBox="0 0 32.666 32.666">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ delay: 0.6, duration: 3 }}
            strokeWidth={0.2}
            fill="none"
            d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
          />
        </svg>
      </motion.div>
        <div className='flex justify-center pt-10 pb-5'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-80 lg:w-[28rem]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <input data-aos='slide-right' data-aos-duration='1000' data-aos-delay='700' className='p-5 bg-transparent border-2 bg-gray-500 bg-opacity-50 dark:bg-opacity-20 backdrop-blur-sm border-slate-200 rounded-sm font-bold' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
            <input data-aos='slide-right' data-aos-duration='1000' data-aos-delay='900' className='p-5 bg-transparent border-2 bg-gray-500 bg-opacity-50 dark:bg-opacity-20 backdrop-blur-sm border-slate-200 rounded-sm font-bold' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange}  required />
            <textarea data-aos='slide-right' data-aos-duration='1000' data-aos-delay='1100' className='p-5 bg-transparent border-2 bg-gray-500 bg-opacity-50 dark:bg-opacity-20 backdrop-blur-sm border-slate-200 rounded-sm font-bold' rows={8} placeholder='Message' name='message' value={formData.message} onChange={handleChange}  required />
            <div className='flex justify-center z-10'>
              <button type='submit' data-aos='slide-up' data-aos-duration='1000' data-aos-delay='1200' className='md:p-5 p-3 border-none rounded-md bg-rose-600 cursor-pointer font-bold text-lg w-1/3 hover:bg-rose-700 text-white transition-colors duration-200'>Submit</button>
            </div>
            {responseMsg && (
              <div className='p-3 bg-green-300 rounded-sm flex justify-between'>
                <p className='pl-9'>{responseMsg}</p>
                <button onClick={handleExit} className='relative bottom-3'>x</button>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-evenly mt-14">
  {touches.map((touch) => (
    <div key={touch.id} className="flex md:items-center md:gap-x-4 overflow-x-hidden">
      <div data-aos='flip-down' data-aos-duration='1000' data-aos-delay={100+touch.id*200}  className='text-xl md:text-4xl text-rose-600' >{touch.icon}</div>
      <div>
        <h1 data-aos='slide-left' data-aos-duration='1000' data-aos-delay={100+touch.id*400} className="text-sm md:text-lg font-bold">{touch.name}</h1>
        <p data-aos='slide-left' data-aos-duration='1000' data-aos-delay={100+touch.id*400} className="text-xs md:text-sm">{touch.detail}</p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Contact;