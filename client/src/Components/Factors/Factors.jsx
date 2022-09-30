import React, { useState } from "react";
import "./Factors.css";
import Contact from "../Contact/Contact";


const Factors = ({setShowContact,showContact}) => {
  return (
    <>
      <div className="factorsContainer">
        <div className="factors-headingArea">
          <div className="factors-heading">
            <p>Surrounded by Major essential factors such as </p>
          </div>
        </div>
        <div className="factors-content">
          <div className="factors-subContent">
            <div className="factors-subContent-text">
              <p>International Airport</p>
              <p>Railway Station</p>
              <p>Renowned Educational Institutions</p>
            </div>
            <div className="factors-subContent-text">
              <p>Top Class Restaurants</p>
              <p>Reputed Hospitals</p>
              <p>Famous Shopping Malls</p>
            </div>
          </div>
        </div>

        <div className="factors-bottomSection"></div>
      </div>
      <div className="factorsContact-container">
         <img src='https://drive.google.com/uc?export=view&amp;id=1NLEvE5paJpDymLImk5tifmcLrQDFb2xr'/>
        <div className="factorsContantButton">
          <p>Everything to cater all your requirements.</p>
          <button onClick={() => setShowContact(!showContact)}  >Contact</button>
        </div>
      </div>
      
    </>
  );
};

export default Factors;
