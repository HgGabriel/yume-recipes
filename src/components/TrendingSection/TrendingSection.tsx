import React, { useEffect, useState } from "react";
import styles from "./TrendingSection.module.scss";
import { mockData } from "../../../public/mockData";
import { Recipe } from "../../types/recipe";
import { useNavigate } from "react-router-dom";

const TrendingSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(2);
  const [selectedItem, setSelectedItem] = useState<Recipe | null>(null);

  useEffect(() => {
    const item = mockData.find((item) => item.id === selectedId);
    if (item) {
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  }, [selectedId]);

  if (!selectedItem) {
    return <div>Carregando...</div>;
  }


  return (
    <>
      <div style={{ padding: "20px", marginTop: "20px" }}>
        <h1 style={{marginBottom:"20px"}}>Destaques</h1>
        <div className={styles.trendingContainer}>
          <div className={styles.trending}>
            <MainTrendingCard item={selectedItem}  />
          </div>
          <div className={styles.trendingCards}>
            {mockData.slice(6, 12).map((item) => (
              <TrendingCard
                key={item.id}
                item={item}
                isSelected={item.id === selectedItem.id}
                onClick={() => setSelectedId(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const MainTrendingCard: React.FC<{ item: Recipe }> = ({ item }) => {
  const navigate = useNavigate();
  return(
  <div
    className={styles.mainTrendingCard}
    style={{ backgroundImage: `url(${item.imageH})`, cursor: "pointer" }}
    onClick={() => navigate(`/recipe/${item.id}`)}
  >
    <div className={styles.mainTrendingCardInfo}>
      <div>
        <h2>{item.title}</h2>
        <img
          src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png"
          alt="rating"
          className={styles.rating}
        />
      </div>
      <p>{item.description}</p>
    </div>
  </div>
)}

const TrendingCard: React.FC<{
  item: Recipe;
  isSelected: boolean;
  onClick: () => void;
}> = ({ item, isSelected, onClick }) => (
  <div
    className={isSelected ? styles.trendingCardSelected : styles.trendingCard}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === "Enter" && onClick()}
  >
    <img src={item.imageV} alt={`Imagem de ${item.title}`} />
  </div>
);

export default TrendingSection;
