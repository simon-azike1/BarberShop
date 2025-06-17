import React from "react";
import {Link} from 'react-router-dom'
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import './contact.css'


const Contact = () => {
  return (
    <>
<Header/>
<div className="contact-page">
{/* Hero Section */}
<secction className="hero-section-2">
    <h1 className="hero-heading">
        Get In Touch
    </h1>
    <div className="hero-text">
        We're here to help! <br />
        Reach out for appointments, questions, or just to say hi.   
 </div>
</secction>

{/* Contact Form Section */}
<section className="form-section">
 <form className="contact-form" action="">
<label htmlFor="name">Name</label>
<input  placeholder="Your full name please"type="text" name="" id="name" />
<label htmlFor="email" >Email</label>
<input type="email" name="email" id="email" placeholder="simon@gmail.com" required />
<textarea name="" id="message" rows={5} placeholder="Write your message here..."></textarea>
<button type="submit" className="submit-btn">Send Messages</button>
    </form>
</section>
</div>
 <Footer/>
  </>
  )
}

export default Contact;
