import React, { useEffect, useState } from "react";
import { mockData } from "../../../public/mockData";
import { Recipe } from "../../types/recipe";
import styles from "./RecipeDetails.module.scss";

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null); // Estado para o accordion
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    const recipe = mockData.find((recipe: Recipe) => recipe.id === Number(id));
    if (recipe) {
      setRecipe(recipe);
    } else {
      setError("Receita não encontrada");
    }
    setIsLoading(false);
  }, [id]);

  const toggleStep = (index: number) => {
    setActiveStepIndex(activeStepIndex === index ? null : index);
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
                    onClick={() => setIsFavorite(!isFavorite)}
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
            {recipe.steps.map((step, index) => (
              <div key={index}>
                <button
                  className={`${styles.stepAccordion} ${
                    activeStepIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleStep(index)}
                >
                  {step.title}
                </button>
                <div
                  className={styles.stepPanel}
                  style={{
                    maxHeight: activeStepIndex === index ? "500px" : "0",
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
