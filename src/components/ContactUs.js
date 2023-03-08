import React from 'react';
import './ContactUs.css';

function ContactForm() {
  return (
    <div className='contact-form-container'>
      <div className='form-box'>
        <div className='right-container'>
          <h2 className='right-container-title'>Get in touch!</h2>
          <p className='right-container-para'>We are open for any suggestion or just to have a chat. Leave a message and we will return as soon as possible!</p>

        </div>

        <div className='left-container'>

          <section className='contact-form-section'>
            <label className='contact-labels'>Full Name</label>
            <input type='text' className='input-name' placeholder='Enter your name'></input>
    
            <label className='contact-labels'>E-mail</label>
            <input type='text' className='input-email' placeholder='Enter your email'></input>
    
            <label className='contact-labels'>Message</label>
            <textarea type='text' className='message-area' cols='50' rows='10' placeholder='Type your message' />
          </section>
    
          <button className='form-submit-btn'>Submit Message</button>
        </div>
  
          

      </div>
      
      
    </div>
    
  )
}

export default ContactForm