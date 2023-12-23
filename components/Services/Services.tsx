import React from 'react'
import {FaCameraRetro} from 'react-icons/fa';
import {GiNotebook} from 'react-icons/gi';
import {SlNote} from 'react-icons/sl'
const skillsData = [
    {
        name: "Harga Murah",
        icon: (
            <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link:"#",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        aosDelay:"0"
    },
    {
        name: "Unit Sehat",
        icon: (
            <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link:"#",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        aosDelay:"400"
    },
    {
        name: "Terlengkap & Terpercaya",
        icon: (
            <SlNote className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link:"#",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        aosDelay:"800"
    }
]

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='py-14 sm:min-h[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='pb-12'>
                <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>
                    Why Choose Us
                    </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    skillsData.map((skill) => (
                        <div
                        key={skill.name}
                        data-aos="fade-up"
                        data-aos-delay={skill.aosDelay}
                        className='card text-center group py-5 space-y-3 sm:space-y-6 sm:py-16 bg-dark hover:bg-primary rounded-xl text-white hover:text-black'>
                            <div className='grid place-items-center space-y-3 sm:space-y-6 p-4 sm:py-16 '>
                                {skill.icon}
                            </div>
                            <h1 className='text-xl lg:text-2xl'>
                                {skill.name}
                            </h1>
                            <p>
                                {skill.description}
                            </p>
                            <a className=''
                            href={skill.link}>Learn More</a>

                        </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services

