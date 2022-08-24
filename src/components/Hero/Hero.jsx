import React from 'react'
import './Hero.css'
import Header from '../Header/Header';
import heart from '../../assets/m2.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
        <Header/>

          <div className="the-best-ad">
            <div></div>
            <span>Agence Ddigital Marketing</span>
          </div>

          {/* Hero Heading*/ }
          <div className="hero-text">
            <div>
              <span> Grow up </span>
              <span> Your busniss </span>
            </div>
            <div>
              <span>with Us</span>
            </div>
            <div>
              <span>It’s your time to grow through digital marketing</span>
            </div>
          </div>
          {/* Figures*/}
          <div className="figures">
            <div>
              <span>+ 1M </span>
              <span> Vues </span>
            </div>
            <div>
              <span> + 200K </span>
              <span> hours  </span>
            </div>
            <div>
              <span> + 10 </span>
              <span> Clients </span>
            </div>
          </div>
          {/*hero buttons*/}
          <div className="hero-buttons">
            <buttons className="btn"> Get started</buttons>
            <buttons className="btn"> Learn More</buttons>
          </div>
          
     </div>
        <div className="right-h">
        <button className="btn">Join Now</button>

          <div className="heart-rate">
            <img src={heart}  alt="" className="mlogo"/>
            <span></span>
          </div>
        </div>
        
    </div>
  )
}

export default Hero