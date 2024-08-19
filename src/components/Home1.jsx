import React from 'react'
import main from '../assets/main.png'
import second from '../assets/1.png'
import third from '../assets/build1.jpg'
import fourth from '../assets/build2.jpg'
import fifth from '../assets/2.png'
import sixth from '../assets/3.png'
import seventh from '../assets/4.png'
import eight from '../assets/5.png'
import ninth from '../assets/6.png'
import ten from '../assets/7.png'
import FAQ from './FAQ'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Cards from './Cards'

import hosting from '../../public/hosting.svg'
import collocation from '../../public/collocation.svg'

function Home1() {
  return (
    <>
      <HeroSection />
      
      <div className="next h-auto bg-black bg-cover md:flex items-center justify-between lg:flex lg:flex-start py-10 lg:space-between" id="mission">
        <div className="content flex-col-reverse px-20 py-12">
          <h2 className='text-yellow-600 py-5 text-lg lg:text-2xl '>Mission:</h2>
          <p className='text-white text-xl py-2 m-auto custom md:text-3xl lg:text-5xl '>To establish Shillong's first localized data center, reducing dependency on external service providers.</p>
          <h2 className='text-yellow-600 py-5 text-lg lg:text-2xl  text-right'>Vision:</h2>
          <p className='text-white text-xl py-2 m-auto custom md:text-3xl lg:text-5xl text-right'>Empower local businesses with reliable, secure, and accessible digital infrastructure.</p>
        </div>
        <div className='min-w-fit'>
          <img src={second} alt="" className='w-auto md:h-[70vh] -top-28 md:block mr-16 hidden lg:relative lg:-top-40 lg:h-[80vh]' />
        </div>
      </div>
      
      <div className=' px-6 lg:flex h-[20vh] sm:h-[30vh] md:h-[50vh] lg:h-[50vh]' id='about'>
        <div className='custom'>
          <h1 className='text-black py-4 text-xl lg:w-full sm:font-bold mt-20 sm:py-2 md:mt-4 md:py-8 md:text-2xl lg:py-36 lg:px-20 lg:font-black lg:text-5xl lg:ml-24'>Server Hosting</h1>
        </div>
        <div className='text-lg md:text-xl sm:text-lg lg:py-40 lg:text-2xl px-0 lg:px-44 lg:ml-16'>
          <p>Reliable and secure server hosting solutions tailored to meet the needs of small and medium-sized enterprises (SMEs), startups, and larger organizations.</p>
        </div>
      </div>

      <div className=" items-center w-full  justify-center p-8 bg-white lg:flex lg:items-center lg:w-full lg:mt-32 lg:h-[50vh] lg:mb-28">
        <div className="flex-1 my-10 md:mr-52 lg:ml-40">
          <img src={collocation} alt="Cityscape" className="flex-1 mr-8 mb-4 aspect-square object-cover rounded-xl lg:w-80 lg:h-auto lg:ml-28 lg:mr-8" />
        </div>
        <div className=" pl-2 mr-10 lg:flex-1">
          <h1 className="text-2xl custom lg:text-4xl">
          Colocation Services
          </h1>
          <p className="mt-4 text-xl lg:text-lg">
          Secure colocation options for businesses looking to place their hardware in our state-of-the-art facility.
          </p>
        </div>
      </div>

      <div className=" items-center w-full justify-center p-8 bg-white lg:flex lg:items-center lg:justify-center lg:h-[30vh] lg:mb-28">
        <div className=" pl-2 mr-10 lg:flex-1 lg:ml-40 lg:pl-24">
          <h1 className="text-2xl custom lg:text-4xl">
          Cloud Services
          </h1>
          <p className="mt-4 text-xl lg:text-lg">
          Scalable cloud solutions that allow businesses to grow without the hassle of managing their own infrastructure.
          </p>
        </div>
        <div className="flex-1 my-10 lg:pr-40">
          <img src={hosting} alt="Cityscape" className="flex-1 mr-8 mb-4 aspect-square object-cover rounded-xl lg:w-80  lg:h-96 lg:ml-28" />
        </div>
      </div>

      <div className='flex items-center justify-evenly flex-wrap h-[60vh] bg-white mt-4 lg:justify-around lg:h-[55vh] lg:px-36'>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={main} alt="" className='h-20 object-contain w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={fifth} alt="" className='h-20 object-contain w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={sixth} alt="" className='h-20 object-contain  w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={seventh} alt="" className='h-20 object-contain  w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={eight} alt="" className='h-20 object-contain  w-full' />
        </div>
        {/* <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={ninth} alt="" className='h-20 object-contain  w-full' />
        </div> */}
      </div>

      <Cards/>
      
      <div className='flex items-center justify-evenly flex-wrap h-[60vh] bg-white mt-4 lg:justify-around lg:h-[55vh] lg:px-36'>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={ten} alt="" className='h-20 object-contain w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={ten} alt="" className='h-20 object-contain w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={sixth} alt="" className='h-20 object-contain  w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={seventh} alt="" className='h-20 object-contain  w-full' />
        </div>
        <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={eight} alt="" className='h-20 object-contain  w-full' />
        </div>
        {/* <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 flex justify-center p-1'>
          <img src={ninth} alt="" className='h-20 object-contain  w-full' />
        </div> */}
      </div>

      <FAQ />
      <Footer />
    </>
  )
}

export default Home1
