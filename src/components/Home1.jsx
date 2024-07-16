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

function Home1() {
  return (
    <>
      <HeroSection />
      
      <div className="next h-[50vh] sm:h-[50vh] bg-black bg-cover md:flex  items-center justify-between lg:h-[70vh] lg:flex lg:flex-start lg:space-between">
        <div className="content flex-col-reverse px-20 py-12">
          <h1 className='text-yellow-600 py-5 text-lg lg:text-2xl underline'>About Us:</h1>
          <p className='text-white text-xl py-2 m-auto custom md:text-3xl lg:text-5xl '>Born amidst <br />Shillong’s vibrant <br />culture, Tynrai <br /> breathes life into technology.</p>
        </div>
        <div>
          <img src={second} alt="" className='max-w-full md:h-[70vh] -top-28 md:block mr-16 hidden lg:relative lg:-top-28 lg:h-[80vh]' />
        </div>
      </div>
      
      <div className=' px-6 lg:flex h-[20vh] sm:h-[30vh] md:h-[50vh] lg:h-[50vh]'>
        <div className='custom'>
          <h1 className='text-black py-4 text-xl lg:w-full sm:font-bold mt-20 sm:py-2 md:mt-4 md:py-8 md:text-2xl lg:py-36 lg:px-20 lg:font-black lg:text-5xl lg:ml-24'>Make Your Dreams a Reality</h1>
        </div>
        <div className='text-lg md:text-xl sm:text-lg lg:py-40 lg:text-2xl lg:px-44 lg:ml-20'>
          <p>Tynrai sprouted from a single dream: Make technology available to everyone. With our expert assistance, businesses of all sizes can navigate the digital era successfully.</p>
        </div>
      </div>

      <div className=" items-center w-full  justify-center p-8 bg-white lg:flex lg:items-center lg:w-full lg:mt-32 lg:h-[50vh] lg:mb-28">
        <div className="flex-1 my-10 md:mr-52 lg:ml-40">
          <img src={third} alt="Cityscape" className="flex-1 mr-8 mb-4 aspect-square object-cover rounded-xl lg:w-80 lg:h-auto lg:ml-28 lg:mr-8" />
        </div>
        <div className=" pl-2 mr-10 lg:flex-1">
          <h1 className="text-2xl custom lg:text-4xl">
            Bringing State-of-the-Art IT Services to Shillong
          </h1>
          <p className="mt-4 text-xl px-2 lg:text-lg">
            At Tynrai, we indulge your business with custom IT solutions, ensuring your digital presence is impactful and resonating.
          </p>
        </div>
      </div>

      <div className=" items-center w-full justify-center p-8 bg-white lg:flex lg:items-center lg:justify-center lg:h-[30vh] lg:mb-28">
        <div className=" pl-2 mr-10 lg:flex-1 lg:ml-40 lg:pl-24">
          <h1 className="text-2xl custom lg:text-4xl">
            Comprehensive Packages for Every Need
          </h1>
          <p className="mt-4 text-xl px-2 lg:text-lg">
            Get a whole range of services from web development to server maintenance - all under one roof, all tailored to your business.
          </p>
        </div>
        <div className="flex-1 my-10 lg:pr-40">
          <img src={fourth} alt="Cityscape" className="flex-1 mr-8 mb-4 aspect-square object-cover rounded-xl lg:w-80  lg:h-96 lg:ml-28" />
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

      <Cards />
      
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
