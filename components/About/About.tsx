import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 place-items-center space-x-10 bg bg-slate-200 py-5'>
        <div 
        data-aos="slide-right"
        data-aos-duration="2000"
        className=''>
            <img 
            className='relative scale-75 -z-10 max-h-[600px] sm:scale-90 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
            
            src="/Controller.png" alt="" />
        </div>
        <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className='space-y-5'>
            <h1 className='text-5xl lg:text-5xl font-semibold font-serif'>
                About Us
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti culpa cupiditate fugit inventore illum porro laudantium quibusdam, nemo minima quo.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti culpa cupiditate fugit inventore illum porro laudantium quibusdam, nemo minima quo.
            </p>
            <button className='button-outline'>Get Started</button>
        </div>
    </div>
  )
}

export default About