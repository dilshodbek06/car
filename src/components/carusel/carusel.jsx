import "./carusel.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import reklamaLogo from "../../images/reklama rasm.svg";
import boxLogo from "../../images/box.svg";
import deliveryLogo from "../../images/delivery-truck.svg";
import fullTimeLogo from "../../images/24-hours.svg";
import safetyLogo from "../../images/shield.svg";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const Carusel = () => {
  return (
    <div className="my-carusel">
      <div className="container">
        <div className="back-shape"></div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="left">
                <p>Assalomu alaykum!</p>
                <h1>Mashinangiz Uchun eng Yaxshi Tanlov.</h1>
                <button className="buy-btn">
                  <span>Sotib olish</span>
                  <BsArrowRight className="right-icon" />
                </button>
              </div>
              <div className="right">
                <img src={reklamaLogo} alt="slider image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="left">
                <p>Assalomu alaykum!</p>
                <h1>Mashinangiz Uchun eng Yaxshi Tanlov.</h1>
                <button className="buy-btn">
                  <span>Sotib olish</span>
                  <BsArrowRight className="right-icon" />
                </button>
              </div>
              <div className="right">
                <img src={reklamaLogo} alt="slider image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="left">
                <p>Assalomu alaykum!</p>
                <h1>Mashinangiz Uchun eng Yaxshi Tanlov.</h1>
                <button className="buy-btn">
                  <span>Sotib olish</span>
                  <BsArrowRight className="right-icon" />
                </button>
              </div>
              <div className="right">
                <img src={reklamaLogo} alt="slider image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="benefits-bottom">
        <div className="benefits-container">
          <div className="item">
            <img src={boxLogo} alt="box" />
            <div>
              <h5>Chegirmalar</h5>
              <p>Har haftada</p>
            </div>
          </div>
          {/* 2 */}
          <div className="item">
            <img src={deliveryLogo} alt="delivery" />
            <div>
              <h5>Yetkazib berish</h5>
              <p>Xohlagan joyingizga</p>
            </div>
          </div>
          {/* 3 */}
          <div className="item">
            <img src={fullTimeLogo} alt="full time" />
            <div>
              <h5>Support 24/7</h5>
              <p>Xohlagan vaqtingizda</p>
            </div>
          </div>
          {/* 4 */}
          <div className="item">
            <img src={safetyLogo} alt="safety" />
            <div>
              <h5>Ishonchli mahsulot</h5>
              <p>100% Original</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
