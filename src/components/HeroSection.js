import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>WAI 262</h1>
            <p>Let's talk about Māori legacy?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                    CONTACT US
                </Button>
                <Button className='btns' buttonSize='btn--large' buttonStyle='btn--primary'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>

  );
}

export default HeroSection