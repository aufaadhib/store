import React from 'react'
const PsList =[
    {
        name:"Playstation 5",
        price:"150.000",
        image:"/ps5.png",
        aosDelay:"0"

    },
    {
        name:"Playstation 4",
        price:"100.000",
        image:"/ps4.png",
        aosDelay:"400"

    },
    {
        name:"Playstation 3",
        price:"75.000",
        image:"/ps3.png",
        aosDelay:"800"

    },

]

type Props = {}

const Details = (props: Props) => {
  return (
    <div className='container space-y-8 py-14'>
        <div className='space-y-2'>
            <h1 className='font-serif text-3xl'>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quibusdam.</p>
        </div>
        {/* Car Listing Card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 '>
            {
                PsList.map((Ps) =>(
                    <div 
                    key={Ps.name}
                    data-aos="fade-up"
                    data-aos-delay={Ps.aosDelay}
                    className='border-2 rounded-lg border-gray-600 hover:bg-gray-300 space-y-5 p-3 relative group grid pt-8 '>
                        <div className='grid place-items-center'>
                        <div className='w-[200px] h-[300px] sm:h-[120px] sm:w-[120px]'>
                            <img 
                            className='w-[300px] h-[300px] sm:h-[120px] sm:w-[120px] object-contain group-hover:scale-150 duration-700 pb-5 lg:scale-[1.3] lg:group-hover:scale-[1.6]'
                            src={Ps.image} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-primary font-semibold text-2xl sm:text-base'>{Ps.name}</h1>
                        </div>
                        </div>
                        <div>
                            <div className='items-center text-lg font-semibold lg:flex lg:justify-between'>
                                <p>Rp{Ps.price}/Hari</p>
                                <a className='hover:text-yellow-600' href="">Details</a>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            
        </div>
        <div className='grid place-items-center'>
            <a className='button-outline' href="">Kontak Admin</a>
        </div>
    </div>
  )
}

export default Details