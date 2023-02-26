import React from 'react';
import './Footer.css';
import 'boxicons';

function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-section'>
            {/* section 1 */}

            <div className="footer__data">
                
                <h2 className='footer__title'>
                    Join the Tiaki Taonga newsletter to receive our super exciting news!
                </h2>
                <form>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
                    <button className='button'>Click</button>
                </form>

            </div>

            {/* Icons section 3 */}
            <div className="footer__data">
                <h2 className="footer__title">Follow us!</h2>
                <div className='footer-icons'>
                    <a href="https://www.facebook.com/" className="footer__social">
                        <box-icon type="logo" name="facebook" color="#fff" className="icon"></box-icon>
                    </a>
                    <a href="https://www.instagram.com/" className="footer__social">
                        <box-icon type="logo" name="instagram" color="#fff"></box-icon>
                    </a>
                    <a href="https://www.twitter.com/" className="footer__social">
                        <box-icon type="logo" name="twitter" color="#fff"></box-icon>
                    </a>
                </div>
                <p className="footer__copyright">&#169; 2023 copyright all right reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer