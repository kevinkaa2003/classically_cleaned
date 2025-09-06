import React, { useEffect, useState, useRef } from 'react';
import './Custom_Slideshow.css';
import cleaned1 from './Untitled design (2).png';
import cleaned2 from './Untitled design (3).png';
import cleaned3 from './Untitled design (5).png';
import { useNavigate }from 'react-router-dom';

//Slideshow component
const Slideshow = () => {

    //Declare variables
    const [currentRow, setCurrentRow] = useState(0);
    const rowsRef = useRef([]);
    const navigate = useNavigate();

    //Slideshow effect
    useEffect(() => {
        rowsRef.current = document.querySelectorAll("#slideshowtable tr");
        showRow(0);
        const interval = setInterval (() => nextRow(), 10000); //Change slide every 10 seconds
        return () => clearInterval(interval); //Cleanup on unmount
    }, []);

    const goToContact= () => {
        navigate('/Contact');
    }


    //Show row function
    function showRow(index) {
        rowsRef.current.forEach((row, i) => {
            const message = row.querySelector(".message");


            if (row) {
                row.style.display = i === index ? "table-row" : "none";
                row.classList.toggle("fade-in", i === index);
            }
            if (message) {
                message.classList.toggle("expand-width", i === index);

            }
        });
    }

    //Next row function
    function nextRow() {
        setCurrentRow((prev) => {
            const newIndex = (prev + 1 ) % rowsRef.current.length;
            showRow(newIndex);
            return newIndex;
        });
    }

    return (
        <>
        <div className="slideshow" id="slideshow1">
            <table id="slideshowtable" className="slideshowtable">
                <tbody>
                    <tr>
                        <td>
                            <img src={cleaned1} style={{height: "900px", width: "100vw"}}/>
                            <div className="message">Welcome to Classically Cleaned!<button onClick={goToContact}>Schedule a Cleaning</button></div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={cleaned2} style={{height: "900px", width: "100vw"}}/>
                            <div className="message">We are a cleaning company based out of Fort Scott, KS.<button onClick={goToContact}>Schedule a Cleaning</button> </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={cleaned3} style={{height: "900px", width: "100vw"}}/>
                            <div className="message">Book your cleaning today!<button onClick={goToContact}>Schedule a Cleaning</button></div>

                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
        </>
     );
}

export default Slideshow;
