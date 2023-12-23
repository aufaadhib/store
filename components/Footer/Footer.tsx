import React from 'react'
import { FaMapMarked } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div 
    data-aos="fade-up"
    className='grid grid-cols-2 gap-5 bg-slate-400 p-12 sm:grid sm:grid-cols-4'>
        <div className='space-y-7 col-span-2'>
            <h1 className='text-4xl font-serif'>Playsation Rental</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores exercitationem amet corrupti architecto modi earum commodi et. Quidem, laboriosam porro.</p>
            <div className='flex gap-2 text-base sm:text-xl'>
                <FaMapMarked/>
                <a>Banyuwangi, Jawa Timur, Indonesia</a>
            </div>
            <div className='flex gap-2 text-base sm:text-xl'>
                <IoPhonePortrait/>
                <a>081331096250</a> 
            </div>
            <div className='flex gap-5 text-3xl'>
                <a 
                className='hover:scale-125 duration-300' href=""><FaInstagram/></a>
                <a 
                className='hover:scale-125 duration-300' href=""><FaTwitter/></a>
                <a 
                className='hover:scale-125 duration-300' href=""><FaTiktok/></a>
            </div>

        </div>
        <div>
                <h1 className='text-2xl font-semibold'>Importan Links</h1>
                <ul className='text-lg'>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨 Home</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨 About</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨 Contact</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨 Blog</a>
                    </li>
                </ul>
        </div>
        <div>
                <h1 className='text-2xl font-semibold'>Importan Links</h1>
                <ul className='text-lg'>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨Home</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨About</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨Contact</a>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <a href="">💨Blog</a>
                    </li>
                </ul>
        </div>
        <div></div>
    </div>
  )
}

export default Footer