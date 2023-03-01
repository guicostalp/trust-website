import React from "react"
import './AboutUsCard.css';
import myImage1 from '../assets/imagess/Discovering-New-Zealands-Maori-Culture-_-Image-Via-Trafalgar-800x450.jpg'
import myImage2 from '../assets/imagess/meg-jerrard-u7lgJ8qrdAM-unsplash.jpg'
import myImage3 from '../assets/imagess/duskfall-crew-vIQfQjrovW8-unsplash.jpg'


function AboutUsCard() {
    return (
        <>
        <div className="about-container">
          <div className="about-heading">
            <h1>What is the WAI 262 Claim</h1>
            <p>The basic aspiration of the claim has often been coined by the phrase “Māori control over Māori things”.</p>
          </div>

          <section className="about-claim">
          <img src={myImage1} alt='Travel Image'
                    className="about__img" />
            <div className="about-content">
              <h2>What is its purpose?</h2>
              <p>The claim essentially seeks to restore “tino rangatiratanga” 
                (full authority and self‐determination) of the whānau, hapū 
                and iwi of Aotearoa over our “taonga” (those things and values 
                which we treasure, both intangible and tangible).
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </section>
        </div>

        <div className="about-container">
          <section className="about-claim">
          
            <div className="about-content">
              <h2>How did it get started?</h2>
              <p>After the claim was lodged in 1991, it was amended in 1993 to include international law matters
                 such as the impact of international Trade Agreements (like the ‘Gatt: Trips Agreement’), Intellectual 
                 Property Rights (e.g. how Copyrights, Trademarks and Patents over taonga affect Māori control over 
                 the same), and New Zealand compliance with internationally-recognised Indigenous Peoples Rights.
                 In 1997, the first Waitangi Tribunal hearing was held at Motuti, in the Far North. It took until 
                 2003 to hear all the 
                 claimant evidence around the motu, and it wasn’t until 2010 that the Waitangi Tribunal released the
                  Reo Chapter of its 
                 report.  The Tribunal finally released its complete report, titled “Ko Aotearoa Tēnei” (‘This is
                  Aotearoa’ or ‘This is 
                 New Zealand’), in 2011. By this time, Saana Murray of Ngāti Kuri was the only remaining claimant
                  alive. Sadly, Saana 
                 passed away later that same year.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
            <img src={myImage2} alt='Travel Image'
                    className="about__img__center" />
          </section>
        </div>


        <div className="about-container">
          <section className="about-claim">
            <img src={myImage3} alt='Travel Image'
                    className="about__img" />
            <div className="about-content">
              <h2>Where are we now?</h2>
              <p>At the time of its release in 2011, the Crown promised to consider the Tribunal's report,
                 but stated that it would not be rushed into responding. While the Crown admits the 262 report 
                 has far-reaching implications across a wide range of Government policies, iwi claimants are 
                 still waiting for the Crown's comprehensive response.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

          </section>
        </div>







        </>

  );
}

export default AboutUsCard