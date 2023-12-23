'use client'
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Details from '@/components/Details/Details';
import Rating from '@/components/Rating/Rating';
import Footer from '@/components/Footer/Footer';

export default function Home() {
    
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  },[]);
  return (
      <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Details/>
      <Rating/>
      <Footer/>
      </div>
      
  )
}
