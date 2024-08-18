
import React from 'react'
import Navbar from '../ui/Navbar'
import Hero from '../ui/Hero'
import About from '../ui/About'
import Values from '../ui/Values'
import { IoIosWifi } from "react-icons/io";
import TheWhy from '../ui/TheWhy'
import Process from '../ui/Process'
import Start from '../ui/Start'
import Testimonial from '../ui/Testimonial'
import Support from '../ui/Support'
import Footer from '../ui/Footer'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Databundle from './Databundle'
import Cash from './Cash'
import Cabletv from './Cabletv'
import Airtime from './Airtime'
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      {/* <Values />
       <Process/>
      <TheWhy />
      <Start/>
      <Testimonial/>
      <Support/>
      <Footer/>
      <Signup/>
       <Login/>
       <Dashboard/>
       <Databundle/>
       <Cash/>
       <Cabletv/>
       <Airtime/> */}
    </>
  );
}

export default Home