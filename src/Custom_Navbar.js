import React, { useState, useEffect, useContext } from 'react';
import './Custom_Navbar.css';
import { useNavigate } from 'react-router-dom';

//Navbar component
const Navbar = () => {

    //Declare Variables
    const[searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const[isInputFocused, setIsInputFocused] = useState(false);

    //Conditional Rendering of Search Results
    {isInputFocused && (searchTerm.length > 0 || searchResults.length > 0) && (
        <div className='search-results' id='search-results'>
            {renderSearchResults(searchResults, searchTerm)}
        </div>
    )}



    //Search Function
    function search(event) {

        const input = event.target.value.toLowerCase();
        setSearchTerm(input); //Update the state

        const searchItems = [
            { name: "Home", url: "/Home" },
            { name: "Contact", url: "/Contact" },
            { name: "Phone", url: "/Contact" },
            { name: "Address", url: "/Contact" },
            { name: "E-mail", url: "/Contact" },


         ];

         const filteredSearch = searchItems.filter(searchItems => searchItems.name.toLowerCase().includes(input));

         setSearchResults(filteredSearch);
    };

    //Render search results function
    function renderSearchResults(searchResults, searchTerm) {

        //Check if there are search results
        if (searchResults.length > 0) {
            return searchResults.map(function(result, index) {
                return (
                    <a key={index} onClick={() => navigate(result.url)}>{result.name}</a>
                )
            });
        }


        //Check if the search term is present and no results were found
        else if (searchTerm.length > 0) {
            return (
                <div className='noresultsdiv'>No Results Matched your Search</div>
            );
        }
        // If no search term is present, do not display anything
        else {

            return null ; //No need to render anything
        }
    };




    //Navigation
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToContact = () => {
        navigate('/Contact');
    };

    const goToAbout = () => {
        navigate('/About');
    }



    return (

        <>
        <div className="navbar">
            <div className="navbarcomponents">
                <div className = "navbarhome">
                    <button onClick={goToHome}>Classically Cleaned</button>
                </div>
                <div className="search"> {/*Search Bar */}
                    <input id="searchbar"
                    value = {searchTerm}
                    onChange= {search}
                    onFocusCapture={() => setIsInputFocused(true)}
                    onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
                    type="text"
                    placeholder="Search..."/>
                    {isInputFocused && (searchTerm.length > 0 || searchResults.length > 0) && (
                        <div className="search-results" id="search-results">
                            {renderSearchResults(searchResults, searchTerm)}
                        </div>
                    )}
                </div>
                <div className="dropdowncontact"> {/*Create link to contact form. Create Links to each social media and list phone,email, and office location in DIV*/}
                    <button className="dropdowncontactbtn" onClick={goToContact}><a>Schedule a Cleaning</a>
                    </button>
                    <div className="dropdown-content-contact">
                        <br/>
                        <br/>
                        <p>Phone:(620)-215-2854</p>
                        <br/>
                        <p>Address: Fort Scott KS, 66701</p>
                        <br/>
                        <p>E-mail: jennq031480@gmail.com</p>
                        <br/>
                        <a href="#" className="facebooknav">Facebook</a>
                        <a href="#" className="twitternav">Twitter</a>
                        <a href="#" className="instagramnav">Instagram</a>
                    </div>
                </div>

            </div>
        </div>
        </>
     );
}

export default Navbar;
