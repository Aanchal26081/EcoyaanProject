import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Aboutus from './components/AboutUs/Aboutus';
import OurValues from './components/OurValues/OurValues';
import OurStory from './components/Ourstory/OurStory';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Services/>
      <Aboutus/>
      <OurValues/>
      <OurStory/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App