import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import ContactUs from '../ContactUs';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <ContactUs />
            <Footer />

        </>
    )
}

export default Home;

