import React from 'react'
import Awards from './Awards';
import Stats from './Stats';
import Hero from './Hero';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../openAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return (  
    <>
      
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
      
    </>);
}

export default HomePage;