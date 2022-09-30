import React, { useState } from "react";
import "../Home/Style/Home.css";
import HomeQuote from "../HomeQuote/HomeQuote";
import Factors from "../Factors/Factors";
import Gallery from "../Gallery/Gallery";
import Video from "../VideoSection/Video";
import HousesGallery from "../HousesGallery/HousesGallery";
import Amenities from "../Amenities/Amenities";
import Footer from "../Footer/Footer";
import AmenitiesGallery from "../AmenitiesGallery/AmenitiesGallery";
import Contact from "../Contact/Contact";
import Brouchure from "../Brouchure/Brouchure";
import BookNow from "../BookNow/BookNow";
// import { config } from "../../Config";

const Home = () => {
  const [showBookNow, setShowBookNow] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div className="home-superContainer">
        <a
          href="https://wa.me/+919087856027"
          className="chat-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://drive.google.com/uc?export=view&amp;id=1en-F2uX24cDlpfhw7puqX-FuG_iWbLXQ" />
        </a>
        <a href="tel:+919087856027" className="call-icon">
          <img src="https://drive.google.com/uc?export=view&amp;id=1VxcvlsqKM78Y3aygc9fHoNmWERyUcK0d" />
        </a>
        <div className="book-icon" onClick={() => setShowBookNow(!showBookNow)}>
          <img src="https://drive.google.com/uc?export=view&amp;id=1mpH3n1m3W58_T5UIIOQsa8Nfi_BhVgh2" />
        </div>

        {showBookNow && (
          <div className="book-main">
            <BookNow setShowBookNow={setShowBookNow} />
          </div>
        )}
        {showBrochure && (
          <div className="brochure-main">
            <Brouchure setShowBrochure={setShowBrochure} />
          </div>
        )}
        {showContact && (
          <div className="contact-main">
            <Contact setShowContact={setShowContact} />
          </div>
        )}

        <div className="home-container">
          <div className="homeUpper-section">
            <div className="homeLogo">
              <img src="https://drive.google.com/uc?export=view&amp;id=1_JDQrRp7UCi-239uhg-qgx5kHlJPZpKt" />
              <p className="home-mainHead">GOLDFIELDS NAVA INDIA</p>
            </div>

            {/* <div className="homeBookNow" > <img src={booknowHomeButton} alt="" /></div> */}
          </div>

          <div className="home-lowerSection">
            <img src="https://drive.google.com/uc?export=view&amp;id=1Wcpc54Na5hXiJ2yh-9zwFomQvpNGuAV7" />
          </div>
        </div>
      </div>
      <HomeQuote />
      <Factors setShowContact={setShowContact} showContact={showContact} />
      <Video />
      <Gallery setShowBrochure={setShowBrochure} showBrochure={showBrochure} />
      <HousesGallery
        setShowBookNow={setShowBookNow}
        showBookNow={showBookNow}
      />
      <Amenities />
      <AmenitiesGallery />
      <Footer
        setShowBookNow={setShowBookNow}
        showBookNow={showBookNow}
        setShowBrochure={setShowBrochure}
        showBrochure={showBrochure}
        setShowContact={setShowContact}
        showContact={showContact}
      />
    </>
  );
};

export default Home;
