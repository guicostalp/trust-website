import React, { useState } from 'react'
import  { useRef } from 'react'
import './ContactUs.css'
import emailjs from 'emailjs-com'

const Result = () => {
  
  return (
    <p>Your Message has been suscessfully sent</p>

  )

}

export default function ContactUs() {
  const [result,showResult] = useState (false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83zj1r4', 'template_4pyqarh', form.current, 'ZzJOCnFBiSowZgAac')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true)
  };

  return (
    <form action='' onSubmit={sendEmail}>
      <div className='formWord'>
        <h2>Say Hello</h2>
        <span>Full Name</span>
        <br/>
        <input className="input100" type="text" name='from_name' required />
        <br />
        <span>Phone number (Optional)</span>
        <br />
        <input className="input100" type="text" name='phone' />
        <br />
        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name='email' required />
        <br />
      </div>

      <div className='formWord'>
          <span>Message</span>
          <br />
          <textarea name='message' required></textarea>
          <br />
          <button>Submit</button>
          <div className='row'>
            {result ? <Result /> : null}
          </div>
      </div>
    </form>
  )
}
