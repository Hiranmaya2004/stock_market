import React, { Component } from 'react'

import Hero from './Hero';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import OpenAccount from '../openAccount';

function PricingPage() {
    return ( 
        <>
           
            <Hero/>
            <OpenAccount/>
            <Brokerage/>

        </>
     );
}

export default PricingPage;