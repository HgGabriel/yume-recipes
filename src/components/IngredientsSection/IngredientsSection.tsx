import React from "react";
import styles from "./IngredientsSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

interface IngredientIconProps {
  name: string;
  imageUrl: string;
}

const ingredientList = [
  { name: "Salmão", imageUrl: "https://plus.unsplash.com/premium_photo-1725467481401-e9a1ee6decce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Arroz", imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tako", imageUrl: "https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tofu", imageUrl: "https://garlicdelight.com/wp-content/uploads/Frozen-Tofu-6-1024x1024.jpg" },
  { name: "Salmão", imageUrl: "https://plus.unsplash.com/premium_photo-1725467481401-e9a1ee6decce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Arroz", imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tako", imageUrl: "https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tofu", imageUrl: "https://garlicdelight.com/wp-content/uploads/Frozen-Tofu-6-1024x1024.jpg" }
]

const IngredientIcon: React.FC<IngredientIconProps> = ({ name, imageUrl }) => {
  return (
    <div className={styles.ingredientIcon}>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </div>
  );
};

const IngredientsSection: React.FC = () => {

  const isDesktop = window.innerWidth > 768;

  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <h1>Busque por </h1>
      <h1 style={{ marginBottom: "20px" }}>Ingredientes</h1>
      <div className={styles.ingredientsContainer}>
            <Swiper
              loop={true}
              slidesPerView={6}
              autoplay={{ delay: 2000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
              navigation
              modules={[Navigation, Autoplay]}
            >
              {isDesktop && ingredientList.slice(0, 8).map((ingredient, index) => (
                <SwiperSlide key={index}>
                  <IngredientIcon name={ingredient.name} imageUrl={ingredient.imageUrl} />
                </SwiperSlide>
              ))}
            </Swiper>
          {!isDesktop && ingredientList.slice(0, 4).map((ingredient, index) => (
            <IngredientIcon key={index} name={ingredient.name} imageUrl={ingredient.imageUrl} />
          ))}
        </div>
      </div>
  );
};

export default IngredientsSection;
