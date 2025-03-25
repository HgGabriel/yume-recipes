import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeBanner.module.scss";
import "swiper/swiper-bundle.css";
import { mockData } from "../../../public/mockData";
import { clipText } from "../../utils/clipText";
import { useNavigate } from "react-router-dom";

const HomeBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.mySwiper}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        style={
          {
            "--swiper-pagination-color": "#D84040",
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
          } as React.CSSProperties
        }
      >
        {mockData.slice(0, 5).map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={styles.swiperSlide}
            onClick={() => navigate(`/recipe/${slide.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png"
                  alt="rating"
                  className={styles.rating}
                />
                <p>{clipText(slide.description, 350)}</p>
                <a>Mais Detalhes</a>
              </div>
              <img
                src={slide.imageH}
                alt={slide.title}
                className={styles.slideImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default HomeBanner;
