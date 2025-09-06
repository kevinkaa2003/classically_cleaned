import React, { useEffect, useState, useRef } from 'react';
import './Contact_Widget.css';
import emailjs from '@emailjs/browser';

//Contact Widget component
const ContactWidget = () => {
    const form = useRef();


    //Initialize email.js
    useEffect (() => {
        emailjs.init("5xgP6vguaJHGTQ-E4");
    }, []);

    //Send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5vq8rxk', 'template_35yivvp', form.current, '5xgP6vguaJHGTQ-E4' )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');

            })
            .catch((error) => {
                console.log('Failed...', error);
                alert('Failed to send email. Please try again.');
            });
        console.log("Form:", form);
    };


    return (

         <>
         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
         <div className='mainwrapper'>
            <div className="form-container">
                <div className="wrapper">
                    <br/>
                    <h2>Schedule a Cleaning</h2>
                    <div className="form-section">
                        {/*left side*/}
                        <div className="form-details">
                            <br/>
                            <ul>
                                <li>
                                    <div className="content">
                                        <strong>Location:</strong> Fort Scott, KS, 66701
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <div className="content">
                                        <strong>Call:</strong> (620)-215-2854
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <div className='content'>
                                        <strong>E-mail:</strong> jennq031480@gmail.com
                                    </div>
                                </li>
                                <br/>
                                <br/>
                                <li>
                                    <div className='content'>
                                        <p>Please provide your name, email, and a message describing what services you are needing
                                         and we will get back to you as soon as possible.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*!--right side*/}
                        <div className="inputfield">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                     <textarea
                                    name="name"
                                    id="name"
                                    cols="30"
                                    rows="1"
                                    className="form-control"
                                    required="required"></textarea>
                                    <span className="form-label">Name</span>
                                </div>
                                <div className="form-group">
                                     <textarea
                                    name="email"
                                    id="email"
                                    cols="30"
                                    rows="1"
                                    className="form-control"
                                    required="required"></textarea>
                                    <span className="form-label">Email</span>
                                </div>
                                <div className="form-group">
                                    <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    className="form-control"
                                    required="required"></textarea>
                                        <span className="form-label">Write</span>
                                </div>
                                <div className="submitbuttoncontainer">
                                    <button type="submit" className="submitbutton" onClick={sendEmail}>Send Message</button> {/*Send Button*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

     );
}

export default ContactWidget;
