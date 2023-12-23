import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='py-5'>
        <div className='container min-h-[620px] flex'>
            <div  className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1500"
                className='order-1 sm:order-2'>
                  <img 
                    src="/GamingLogo.png" 
                    alt=""
                    className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                  <p 
                  data-aos="fade-up"
                  className='text-primary text-2xl font-serif'>Deskripsi Biasa</p>
                  <h1 
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className='text-5xl lg:text-7xl font-semibold font-serif'>Ini Judul</h1>
                  <p
                  data-aos="fade-up"
                  data-aos-delay="1000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus dolor at doloribus eaque placeat, iure adipisci dicta?</p>
                  <button 
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  className='border rounded-md color bg-primary py-2 px-6 text-black hover:bg-primary/80 duration-300 shadow-sm'>Get Started</button>
                </div>

            </div>
              

        </div>
    </div>
  )
}

export default Hero;
