import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeBanner.module.scss";
import "swiper/swiper-bundle.css";
import { mockData } from "../../../public/mockData";


const HomeBanner: React.FC = () => {
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
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {mockData.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <div className={styles.slide} >
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" alt="rating" className={styles.rating} />
                <p>{slide.description}</p>
                <a>Mais Detalhes</a>
              </div>
              <img src={slide.imageH} alt={slide.title} className={styles.slideImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default HomeBanner;
