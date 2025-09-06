import logo from './logo.svg';
import './Contact.css';
import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import ContactWidget from './Contact_Widget.js';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';

//Contact Component
const Contact = () => {
  return (
    <>
      <Navbar/>
          <ContactWidget/>
      <CustomFooter/>
    </>
  );
}

export default Contact;
