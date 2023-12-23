import React, { useEffect, useState } from 'react'
import { BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu';
import DarkModeToggle from './DarkModeToggle';
import { RxHamburgerMenu } from "react-icons/rx";

const NavLinks = [
    {
        id:"1",
        name:"HOME",
        link:"/#"
    },
    {
        id:"2",
        name:"CARS",
        link:"/#cars"
    },
    {
        id:"1",
        name:"ABOUT",
        link:"/#about"
    },
    {
        id:"1",
        name:"BOOKING",
        link:"/#booking"
    },
]

type Props = {}

const Navbar = (props: Props) => {

  return (
    <nav className="shadow-md py-3 dark:bg-dark dark:text-yellow">
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold font-serif'>SMLOVY</h1>
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex items-center gap-8'>
                        {
                            NavLinks.map((data)=>(
                                <li key={data.id} className='py-4'>
                                    <a className='py-2 hover:border-b-2 hover:text-primary hover:border-primary text-lg font-medium transition-colors duration-300' href={data.link}>{data.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='md:hidden'>
                    <RxHamburgerMenu/>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar