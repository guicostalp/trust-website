import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>Join the Aventure newsletter to receive our best vacation deals</p>
            <p className='footer-subscription-text'>You can unsubscibe at any time.</p>
            <div className='input-areas'>
                <form>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>
                        <Link to='/sign-up'>How it works</Link>

                    </h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer