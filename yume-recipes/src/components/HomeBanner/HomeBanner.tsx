import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeBanner.module.scss";
import "swiper/swiper-bundle.css";

const HomeBanner: React.FC = () => {

  const slides = [
    {
      id: 1,
      title: "Receitas",
      description: "Receitas para todos os gostos",
      image: "/banner1.jpg",
    },
    {
      id: 2,
      title: "Receitas",
      description: "Receitas para todos os gostos",
      image: "/banner2.jpg",
    },
    {
      id: 3,
      title: "Receitas",
      description: "Receitas para todos os gostos",
      image: "/banner3.jpg",
    },
    {
      id: 4,
      title: "Receitas",
      description: "Receitas para todos os gostos",
      image: "/banner4.jpg",
    },
    {
      id: 5,
      title: "Receitas",
      description: "Receitas para todos os gostos",
      image: "/banner5.jpg",
    },
  ];

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles.mySwiper}
        slidesPerView={1}
        spaceBetween={30}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default HomeBanner;
