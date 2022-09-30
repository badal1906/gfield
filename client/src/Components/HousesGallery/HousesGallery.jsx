

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./HousesGallery.css";

// import required modules
import { Pagination } from "swiper";

export default function App({setShowBookNow,showBookNow}) {
  return (
    <>
    
      <div className="houseGalleryContainer">
      
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={-30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiperHouseGallery"
        >
          <SwiperSlide className="houseOne">
          <img src='https://drive.google.com/uc?export=view&amp;id=1dpT0EmbJ3B_MNJMe0RWzLa7PiEx3nFGI'/>
            <div className="HouseGalleryBookNow-btn">
            <img  onClick={() => setShowBookNow(!showBookNow)}   src='https://drive.google.com/uc?export=view&amp;id=1mpH3n1m3W58_T5UIIOQsa8Nfi_BhVgh2'/>
            </div>
            
          </SwiperSlide>
          <SwiperSlide className="houseTwo">
          <img src='https://drive.google.com/uc?export=view&amp;id=1Q715X4ni_6FKNRUKTakQ2wASgfRmc4v_'/>
          </SwiperSlide>
          <SwiperSlide className="houseThird">
          <img src='https://drive.google.com/uc?export=view&amp;id=1xYwOu-9gSJ4-obqG4E7YK3PYKdWROPiI'/>
          </SwiperSlide>
          <SwiperSlide className="houseFour">
          <img src='https://drive.google.com/uc?export=view&amp;id=1p3b1BgTGZVhZ2dgLk8wd62SUrT5h4FEN'/>
          </SwiperSlide>
          <SwiperSlide className="houseFive">
          <img src='https://drive.google.com/uc?export=view&amp;id=12l5DkjfWQ3a5E_GsHLsegEONVCP6rd4j'/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
