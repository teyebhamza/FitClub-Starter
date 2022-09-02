import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser'


const Join = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0397as', 'template_1zk69fh', form.current, '8v84QdViEpH7s5JW7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="Join" id="join">
            <div className="left-j">
              <div>
                <span> You are ready </span>
                <div>
                <span> To Grow with us</span>
              </div>
            </div>
  </div>
        <div className="right-j">

          <form ref={form}  className="email-container" onSubmit={sendEmail}>
           <input type="email"  name="user_email" placeholder="Enter your email"/>
           <button  className="btn btn-j">Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join