import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <section className="text-gray-600 body-font bg-[#fe00728c]">
  <div className="container mx-auto flex px-2 py-10 md:flex-row flex-col items-center ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
       <Link to='/About'> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button></Link>
      
      </div>
    </div>
    <div className="">
      <img className="object-cover object-center rounded-md h-96 mt-16 " alt="hero" src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user" />
    </div>
  </div>
</section>

      
    </>
  )
}

export default Header
