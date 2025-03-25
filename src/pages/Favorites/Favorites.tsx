import React, { useEffect } from "react";
import styles from "./Favorites.module.scss";
import { mockData } from "../../../public/mockData";
import { Recipe } from "../../types/recipe";
import { Link, useNavigate } from "react-router-dom";
import { clipText } from "../../utils/clipText";
const cleanIngredients = (ingredients: string[]): string[] => {
  const pattern =
    /^\d+\s?\/?\s?\d*\s?(?:colher(es)?\sde\ssopa|x[ií]cara(s)?\sde\schá|g|ml|x|dente(s)?|pitada(s)?|fatia(s)?|unidade(s)?)\sde\s/gi;

  return ingredients.map((ing) => ing.replace(pattern, "").trim());
};

const RecipeCard: React.FC<{
  recipe: Recipe;
}> = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.recipeCard}
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <div className={styles.recipeCardTop}>
        <div className={styles.recipeImage}>
          <img src={recipe.imageV} alt={recipe.title} />
          <img
            src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png"
            alt="rating"
            className={styles.rating}
          />
        </div>
        <div>
          <span>{clipText(recipe.title, 18)}</span>
          <p>{clipText(recipe.description, 200)}</p>
        </div>
      </div>
      <hr
        style={{
          color: "white",
          backgroundColor: "white",
          height: "1px",
        }}
      />
      <div className={styles.recipeCardBottom}>
        <span>Ingredientes</span>
        <div className={styles.recipeIngredients}>
          <ul>
            {cleanIngredients(recipe.ingredients)
              .filter((ingredient) => ingredient.length <= 30)
              .slice(0, 6)
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
        </div>
      </div>
      <Link to={`/recipe/${recipe.id}`}>
        <p>Mais detalhes</p>
      </Link>
    </div>
  );
};

const Favorites: React.FC = () => {
  const favorites = localStorage.getItem("favorites") || "[]";
  const favoritesArray = JSON.parse(favorites);
  const data = mockData.filter((recipe) => favoritesArray.includes(recipe.id));
  

  return (
    <div className={styles.recipesContainer}>
      <div className={styles.recipes}>
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
