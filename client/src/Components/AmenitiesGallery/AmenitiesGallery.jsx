import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./AmenitiesGallery.css";
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div className="amenitiesGalleryContainer">
    <Swiper
        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={10}
        pagination={{
            clickable: true,
            dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiperAmenities"
      >
        <SwiperSlide className="firstImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=18SePzOHK3sSXs9vxmyjbqF80VF9N0_Hh'/>
            <p>Golf</p>
        </SwiperSlide>

        <SwiperSlide className="secondImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1lpEEBk37ypSinT_AIw1p3j_-mVB0hJ7o'/>
            <p>Fully equipped gym</p>
        </SwiperSlide>

        <SwiperSlide className="thirdImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1h5aD6Zdw9HFfpteQHvA4bGlNRcARFV38'/>
            <p>Cycling</p>
        </SwiperSlide>

        <SwiperSlide className="fourthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1-XnKs5N4mvL6DvMbfIec9WD7dUe3dhMU'/>
            <p>Terrace pool</p>
        </SwiperSlide>

        <SwiperSlide className="fifthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1wqwAjdv4Tcwa69qqiCSSCkvv1j2zVip0'/>
            <p>Walking paths & kids play areas.</p>
        </SwiperSlide>

        <SwiperSlide className="sixthImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1O1-zR4l6oPNelqafDy4dXRmctrFAqLmM'/>
            <p>Banquet & Banquet lawns</p>
        </SwiperSlide>

        <SwiperSlide className="seventhImgBlock swiper-slideAmenities ">
        <img src='https://drive.google.com/uc?export=view&amp;id=1pwwG-Hq3SRa6dkgZfOfL5l64cLSEJ3m-'/>
            <p>Indoor games</p>
        </SwiperSlide>

       
      </Swiper>
    </div>
     
    </>
  );
}
