import React from "react";
import "./Footer.css";

const Footer = ({setShowBookNow,showBookNow,setShowBrochure,showBrochure,setShowContact,showContact}) => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerUpper">
          <div className="footer-left">
          <img src='https://drive.google.com/uc?export=view&amp;id=1_JDQrRp7UCi-239uhg-qgx5kHlJPZpKt'/>
          </div>

          <div className="footer-center">
            <div>
              <p>
                Nava India, Avinashi Road, Next to Hindustan Hospital Coimbatore
                - 641028
              </p>
              <p>Contact number : 770860422 </p>
              <p>Email us: goldfields.navaindia@gmail.com</p>
            </div>
            {/* <div>
            <p>All rights reserved 2022</p>
          </div> */}
          </div>

          <div className="footer-right">
            <p onClick={() => setShowBookNow(!showBookNow)}  >
              Book now
              
            </p>
            <hr />
            <p  onClick={() => setShowContact(!showContact)}  >
              Contact Us
              
            </p>
            <hr />
            <p onClick={() => setShowBrochure(!showBrochure)}   className="footer-right-last">
              Download Brouchre
              
            </p>
            <hr />
          </div>
      
        </div>
        <div className="footerBottom">
        <p>All rights reserved 2022</p>
      </div>
      </div>
    
    </>
  );
};

export default Footer;
