import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.scss";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="slider_item">
            <div className="slider_item__contianer">
              <div className="slider_item__contianer__textbox">
                <div className="slider_item__contianer__textbox__header">
                  INSPIRING BETTER HEALTH
                  <hr size="10" className="slider_item__contianer__textbox__header__bottomline"></hr>
                </div>
                <div className="slider_item__contianer__textbox__title">
                  Healthy heart,
                </div>
                <div className="slider_item__contianer__textbox__subtitle">
                  healthy family
                </div>
                <div className="slider_item__contianer__textbox__content">
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </div>
                <div className="slider_item__contianer__textbox__btns__contianer">
                  <button className="slider_item__contianer__textbox__btn">
 
                    DISCOVER MORE
                  </button>
                  <button className="slider_item__contianer__textbox__btn slider_item__contianer__textbox__btn--gray-one">
                 
                    VIEW OUR SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider_item">
            <div className="slider_item__contianer slider_item__contianerTwo ">
              <div className="slider_item__contianer__textbox">
                <div className="slider_item__contianer__textbox__header">
                  INSPIRING BETTER HEALTH
                  <hr size="10" className="slider_item__contianer__textbox__header__bottomline"></hr>
                </div>
                <div className="slider_item__contianer__textbox__title">
                  Healthy heart,
                </div>
                <div className="slider_item__contianer__textbox__subtitle">
                  healthy family
                </div>
                <div className="slider_item__contianer__textbox__content">
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </div>
                <div className="slider_item__contianer__textbox__btns__contianer">
                  <button className="slider_item__contianer__textbox__btn">
 
                    DISCOVER MORE
                  </button>
                  <button className="slider_item__contianer__textbox__btn slider_item__contianer__textbox__btn--gray-one">
                 
                    VIEW OUR SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
