import React from 'react'
import "./Reasons.css"
import tick from "../../assets/tick.png"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"


const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />

        </div>

        <div className="right-r">

        </div>
    </div>
  )
}

export default Reasons