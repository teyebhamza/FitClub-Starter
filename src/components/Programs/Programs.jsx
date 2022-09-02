import React from 'react';
import "./Programs.css";
import { programsData } from '../../data/programsData';



const Programs = () => {
 return(
     <div className="programs" id="Programs">
        <div className="programs-header">
            <div className="blur blur-p"></div>
            <span>Digital marketing</span>
            <span> Web Developement</span>
            <span>Graphic Designer</span>
            
        </div>
        
            
        <div className="programs-categories">
            {programsData.map((program) =>(
                <div className="category">
                    {program.image} 
                    <span> {program.heading}<span></span>{program.details} </span>
                    <div className="join-now"><span>Join Now</span></div>
                </div>
            ))}
        </div>
        <div className="blur blur-p2"></div>
     </div> 
  )
}

export default Programs;