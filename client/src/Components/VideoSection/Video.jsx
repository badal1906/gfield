import React from "react";
import "./Video.css";
// import playButton from "./VideoContent/playButton.png"
const Video = () => {
  return (
    <>
      <div className="videoContent">
        {/* <img src={playButton} alt="" /> */}
        <video
          // src={
          //   "https://firebasestorage.googleapis.com/v0/b/goldfieldsvillas-b2814.appspot.com/o/Goldfields%20Walkthrough-Whatsapp.m4v?alt=media&token=7d502f99-03aa-4dab-bb16-a1755c195ac0"
          // }
          autoPlay
          loop
          muted
          controls="controls"
          controlsList="nodownload"
          // onclick="this.play()"
        ></video>
      </div>
    </>
  );
};

export default Video;
