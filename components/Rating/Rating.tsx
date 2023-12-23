import React from 'react'
const Testimoni=[
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"0"
  },
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"400"
  },
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"800"
  },
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"0"
  },
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"400"
  },
  {
    Profile:"asus.jpg",
    Star:"⭐⭐⭐⭐⭐",
    Comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo?",
    Nama:"Farhan Aufa",
    aosDelay:"800"
  }

]

type Props = {}

const Rating = (props: Props) => {
  return (
    <div className='container py-8 pb-56'>
      <div className='text-center pb-14 space-y-3'>
        <h1 className='text-3xl sm:text-5xl font-serif font-semibold'>Testimoni Persewaan</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, nulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam dicta. Dicta fuga eius consequuntur cumque odio deleniti a atque?</p>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            Testimoni.map((Testimoni)=>(
              <div 
              data-aos="fade-up"
              data-aos-delay={Testimoni.aosDelay}
              className='grid place-items-center space-y-6 bg-slate-200 rounded-xl py-4'>
                <div>
                  <img 
                  className='h-20 w-20 rounded-full'
                  src={Testimoni.Profile} alt="" />
                </div>
                <div className='hover:scale-125 duration-300'>
                  <p className='text-4xl sm:text-3xl md:'>{Testimoni.Star}</p>
                </div>
                <div>
                  <p className='px-8'>{Testimoni.Comment}</p>
                </div>
                <div>
                  <p className='font-semibold'>{Testimoni.Nama}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Rating