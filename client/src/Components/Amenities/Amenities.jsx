import React from "react";
import "./Amenities.css";
const Amenities = () => {
  return (
    <>
      <div className="Amenities-Container">
        <div className="Amenities-headingArea">
          <div className="Amenities-heading">
            <p>Amenities</p>
          </div>
        </div>

        <div className="Amenities-content">
          <p>01 Club house with community hall</p>
          <p>02 Business Centre</p>
          <p>03 Indoor play room</p>
          <p>04 Mini cinema</p>
          <p>05 Fully equipped gym</p>
          <p>06 Terrace pool</p>
          <p>07 Landscaped outdoor space with banquet lawn</p>
          <p>08 Alfresco dining</p>
          <p>09 Walking paths & kids play areas.</p>
        </div>

        <div className="Amenities-ImageAndDetials">
            <div className="Amenities-Image" >
            <img src='https://drive.google.com/uc?export=view&amp;id=1u5sC_albzHtCqAT8OceFKjULfRYYZTdE'/>
            </div>
         
          <div className="Amenities-Detials">
            <p className="Amenities-Detials-left">Location avinashi <br /> Road</p>
            <p className="Amenities-Detials-center">13 exclusive <br /> units</p>
            <p className="Amenities-Detials-right">Immediate <br /> sales</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
