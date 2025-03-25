import React, { useEffect, useState } from "react";
import { mockData } from "../../../public/mockData";
import { Recipe } from "../../types/recipe";
import styles from "./RecipeDetails.module.scss";

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeStepIds, setActiveStepIds] = useState<number[]>([]);
  const id = location.pathname.split("/").pop();

  const handleAddToFavorites = (id: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const handleRemoveFromFavorites = (id: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.filter(
      (favoriteId: number) => favoriteId !== id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  };

  const handleToggleFavorite = (id: number) => {
    if (isFavorite) {
      handleRemoveFromFavorites(id);
    } else {
      handleAddToFavorites(id);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(Number(id))) {
      setIsFavorite(true);
    }
  }, []);

  useEffect(() => {
    const recipe = mockData.find((recipe: Recipe) => recipe.id === Number(id));
    if (recipe) {
      setRecipe(recipe);
    } else {
      setError("Receita não encontrada");
    }
    setIsLoading(false);
  }, [id]);

  const toggleStep = (stepId: number) => {
    setActiveStepIds((prevIds) =>
      prevIds.includes(stepId)
        ? prevIds.filter((id) => id !== stepId)
        : [...prevIds, stepId]
    );
  };

  return (
    <div className={styles.recipeDetails}>
      {isLoading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {recipe && (
        <>
          <div className={styles.recipeInfo}>
            <div className={styles.recipeDetailsCard}>
              <div className={styles.recipeDetailsCardLeft}>
                <div className={styles.recipeDetailsCardImage}>
                  <img src={recipe.imageV} alt={recipe.title} />
                  <i
                    className={`bi bi-suit-heart${isFavorite ? "-fill" : ""}`}
                    onClick={() => handleToggleFavorite(recipe.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <h2>{recipe.title}</h2>
                <div className={styles.recipeDetailsRating}>
                  <img
                    src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png"
                    alt="rating"
                    className={styles.rating}
                  />
                  <p>{recipe.rating}</p>
                </div>
              </div>
              <div className={styles.recipeDetailsCardRight}>
                <p>{recipe.description}</p>
              </div>
            </div>
            <div className={styles.ingredients}>
              <h2>Ingredientes</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.recipeSteps}>
            <h1>Modo de Preparo</h1>
            {recipe.steps.map((step) => (
              <div key={step.id}>
                <button
                  className={`${styles.stepAccordion} ${
                    activeStepIds.includes(step.id) ? styles.active : ""
                  }`}
                  onClick={() => toggleStep(step.id)}
                >
                  <span>{step.stepNumber}</span>
                  {step.title}
                  <i className="bi bi-chevron-up"></i>
                </button>
                <div
                  className={styles.stepPanel}
                  style={{
                    maxHeight: activeStepIds.includes(step.id) ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-out",
                  }}
                >
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
