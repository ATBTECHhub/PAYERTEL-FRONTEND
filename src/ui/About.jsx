import React from 'react'

const About = () => {
  return (
    <section className='flex items-center justify-between about'>
      <div className='w-[900px] pt-28 pl-8 h-screen'>
        <img src="/image/about2.png" alt="" />
      </div>
      <div className='text-right pr-16 pt-16'>
       <div className='flex items-center'> <hr className='w-28 h-1 mx-auto my-4 bg-black' />
        <h2 className='font-bold text-black pr-28'>ABOUT</h2></div>
        <h1 className='text-5xl leading-tight font-bold  text-[#0436b6] pb-28'>Seamless Data <br /> Reacharges For <br /> Uninterrupted <br /> Connectivity</h1>
        <p className='leading-7 pb-60'>
          Payertel is a comprehensive platform designed to address <br /> the telecom needs
          of users by offering services <br /> such as; Data Bundle Purchases, Airtime Top-Ups, 
          Airtime <br /> to Cash Conversions  and Cable Network Subscriptions. <br /> The platform  aims to
          provide these services at competitive <br /> rates while ensuring a seamless user experience.
        </p>
      </div>
    </section>
  )
}

export default About