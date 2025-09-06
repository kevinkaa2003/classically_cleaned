import logo from './logo.svg';

import React, { useEffect, useState, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './Custom_Navbar.js';
import CustomFooter from './Custom_Footer.js';
import Slideshow from './Custom_Slideshow.js';
import homeImage1 from './Untitled design (6).png';
import residential from './Untitled design (9).png';
import commercial from './Untitled design (8).png';
import './Home.css';

//Home component
const Home = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/Contact');
    }
    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Slideshow/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='hometitlewrapper'>
            <div className='hometitle'>
                <h1>Classically Cleaned</h1>
                <br/>
                <p>Professionally Cleaned, Inside & Out</p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='homeinfo1wrapper'>
            <div className='homeinfo1'>
                <h2>Why Choose Us?</h2>
                <br/>
                <br/>
                <p>We have been providing excellent service to Kansas residents for years. We guarantee a professional clean for your business or residence.</p>
                <button className='homeinfoschedulebtn' onClick={goToContact}>Schedule a Cleaning</button>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='homepriceswrapper'>
            <div className='homepricestitle'>
                <h2>Pricing</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='priceviewerwrapper'>
                <div className='priceviewer'>
                    <div className='residentialprices'>
                        <h3>Residential</h3>
                        <br/>
                        <img src={residential}/>
                        <h4>$20 Per Hour</h4>
                    </div>
                    <div className='commercialprices'>
                        <h3>Commercial</h3>
                        <br/>
                        <img src={commercial}/>
                        <h4>$25 Per Hour</h4>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='priceviewerdescription'>
                    <h4>We have experience with A15 Bed Hunting Lodges, Rental Sales Properties, and Flip Properties.</h4>
                    <br/>
                    <br/>
                    <button className='priceviewerdescriptionbtn' onClick={goToContact}>Click Here to Schedule a Cleaning</button>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <CustomFooter/>
        </>
    );
}

export default Home;
