import React, { useState } from "react";
import "./Gallery.css";
import Brouchure from "../Brouchure/Brouchure";


const Gallery = ({setShowBrochure,showBrochure}) => {
  return (
    <>
      <div className="galleryContainer">
        <div className="galleryTopSection">
          <div className="galleryTopSection-left">
          <img src='https://drive.google.com/uc?export=view&amp;id=1aZtV3axh-kP_zmtfrYJptydcnO3LvfPQ'/>
          </div>
          <div className="galleryTopSection-right">
          <img src='https://drive.google.com/uc?export=view&amp;id=1mrpdYzDuRvPZu9ifTlh6sAx0nYtGfOaJ'/>
          </div>
        </div>
        <div className="galleryBottomSection">
          <div className="galleryBottomSection-left">
          <img src='https://drive.google.com/uc?export=view&amp;id=1ueHbT77NSpZmWSSbiZnwlJoUJ0ofQUT-'/>
          </div>
          <div className="galleryBottomSection-right">
          <img src='https://drive.google.com/uc?export=view&amp;id=1EoEDJ-4cz9qVuHeL8MjrLFR3FiJol-bz'/>
            <button onClick={() => setShowBrochure(!showBrochure)}>
              BROCHURE
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Gallery;
