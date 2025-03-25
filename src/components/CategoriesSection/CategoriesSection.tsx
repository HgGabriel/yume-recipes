import React from "react";
import styles from "./CategoriesSection.module.scss";
import { useNavigate } from "react-router-dom";
const categories = [
  { id: 1, name: "Primavera", image: "https://japanspecialist.com/documents/d/japanspecialist/1_spring_in_japan_body" },
  { id: 2, name: "Verão", image: "https://www.shoreexcursions.asia/wp-content/uploads/2018/08/Summer-in-Japan.jpg" },
  { id: 3, name: "Outono", image: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/11/Chureito-Pagoda-Autumn.jpg" },
  { id: 4, name: "Inverno", image: "https://skyticket.com/guide/wp-content/uploads/2019/11/shutterstock_725803120.jpg" },
];

const CategoryCard: React.FC<{ category: { id: number; name: string; image: string } }> = ({ category }) => {
const navigate = useNavigate();
 return(
  <div className={styles.categoryCard} onClick={() => navigate(`/recipes/${category.name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")}`)}>
    <img src={category.image} alt={category.name} />
    <span>{category.name}</span>
  </div>
);
}

const CategoriesSection: React.FC = () => {

  return (
    <div className={styles.categoriesContainer}>
      <h1>Categorias</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;