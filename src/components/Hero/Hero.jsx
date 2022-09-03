import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import heart from '../../assets/m2.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'


const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="Home">

        <div className="blur hero-blur"></div>
        <div className="left-h">
        <Header/>

          <div className="the-best-ad">
           
            <motion.div
            initial={{left: mobile? '135px': '178px'}}
            whileInView= {{left: '8px'}}
            transition={{...transition, type: 'tween'}}
            ></motion.div>
           
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
              <span>
                 <NumberCounter end={9999}  start={1000} delay='4' preFix='+' /> 
                 </span>
              <span> Vues </span>
            </div>
            <div>
              <span> 
              <NumberCounter end={500}  start={400} delay='4' preFix='+' />
                 </span>
              <span>Work hours  </span>
            </div>
            <div>
              <span> 
              <NumberCounter end={30}  start={15} delay='4' preFix='+' />
                 </span>
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
        <button className="btn">Contact Us</button>
        </div>
        
    </div>
  )
}

export default Hero