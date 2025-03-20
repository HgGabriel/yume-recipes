import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeBanner.module.scss";
import "swiper/swiper-bundle.css";

const HomeBanner: React.FC = () => {

  interface Step {
    id: number;
    stepNumber: number;
    title: string;
    description: string;
  }
  // recipes interface
  interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    ingredients: string[];
    steps: Step[];
  }

  const mockData: Recipe[] = [
    {
      id: 1,
      title: "Sushi Tradicional",
      description: "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
      image: "https://images.unsplash.com/photo-1617196905100-216ffe128142?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["tag1", "tag2"],
      ingredients: ["ingredient1", "ingredient2"],
      steps: [
        {
          id: 1,
          stepNumber: 1,
          title: "Step 1",
          description: "Description 1",
        },
        {
          id: 2,
          stepNumber: 2,
          title: "Step 2",
          description: "Description 2",
        },
      ]
    },
    {
      id: 2,
      title: "Sashimi",
      description: "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["tag1", "tag2"],
      ingredients: ["ingredient1", "ingredient2"],
      steps: [
        {
          id: 1,
          stepNumber: 1,
          title: "Step 1",
          description: "Description 1",
        },
        {
          id: 2,
          stepNumber: 2,
          title: "Step 2",
          description: "Description 2",
        },
      ]
    },
    {
      id: 3,
      title: "Lámen Japonês",
      description: "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
      image: "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["tag1", "tag2"],
      ingredients: ["ingredient1", "ingredient2"],
      steps: [
        {
          id: 1,
          stepNumber: 1,
          title: "Step 1",
          description: "Description 1",
        },
        {
          id: 2,
          stepNumber: 2,
          title: "Step 2",
          description: "Description 2",
        },
      ]
    }
  ]

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
              <img src={slide.image} alt={slide.title} className={styles.slideImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default HomeBanner;
