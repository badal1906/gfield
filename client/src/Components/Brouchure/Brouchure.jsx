import React, { useEffect, useState } from "react";
import "./Brouchure.css";
import { CgClose } from "react-icons/cg";
import firebase from "../../firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import validator from "email-validator"; 

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import axios from "axios";

const Brouchure = ({ setShowBrochure }) => {
  const auth = getAuth();
  auth.languageCode = "en";

  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    mobileNo: "",
    otp: "",
  });

  function verifyCaptcha(e) {
    e.preventDefault();
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("1");
    // verifyCaptcha(e);
    const phoneNumber = "+91" + formDetails.mobileNo;
    const appVerifier = (window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    ));
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
        console.log("sms not sent");
      });
  }

  async function downloadBrochure() {
    const res = await axios({
      url: `/file/download`,
      method: "get",

      responseType: "arraybuffer",
    })
      .then((response) => {
        console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));

        const a = document.createElement("a");

        a.setAttribute("href", url);
        a.setAttribute("download", "GoldFieldBrochure.pdf");
        a.click();

        sendMail();
        setShowBrochure(false);
      })
      .catch((error) => console.log(error));
  }

  async function sendMail() {
    if (!
      formDetails.name
       || !formDetails.mobileNo ) {
            return alert("all fields are required");
          } else if (!validator.validate(
      formDetails.email
      )) {
            return alert("Enter a valid email");
          } else if (
            formDetails.mobileNo.length < 10 &&
            formDetails.mobileNo.length > 10
          ) {
            return alert("Enter a valid mobile no");
          } 

    let obj = {
      name: formDetails.name,
      email: formDetails.email,
      num: formDetails.mobileNo,
    };

    await axios.post("/user/contact", obj);
  }

  function submitOtp(e) {
    e.preventDefault();
    const code = formDetails.otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("otp verified");
        downloadBrochure();
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  return (
    <>
      <div className="brouchure-mainContainer">
        <div
          className="brouchurecloseButton"
          onClick={() => setShowBrochure(false)}
        >
          <CgClose />
        </div>

        <div className="brouchure-subContainer">
          <form className="brouchure-form" onSubmit={(e) => onSubmit(e)}>
            <div className="brouchure-mainHeading">
              <p>Enter your details</p>
            </div>

            <div className="brouchure-formDeatils">
              <div className="brouchureformDeatils-name">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  value={formDetails.name}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="brouchureformDeatils-email">
                <label htmlFor="">Your email address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  value={formDetails.email}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="brouchureformDeatils-number">
                <div className="brouchureformDeatils-numberLeft">
                  <label htmlFor="">Enter you mobile number</label>
                  <input
                    type="number"
                    name=""
                    id=""
                    required
                    value={formDetails.mobileNo}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        mobileNo: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="brouchureformDeatils-numberRight">
                  <button id="sign-in-button" type="submit">
                    Get OTP
                  </button>
                </div>
              </div>
              <div className="brouchureformDeatils-bottom">
                <div className="brouchureformDeatils-download">
                  <label htmlFor="">Enter OTP</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    value={formDetails.otp}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        otp: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="brouchure-submitButton">
                  <button onClick={submitOtp}>Download</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Brouchure;
