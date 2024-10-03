import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { idMeal } = useParams(); // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Used to redirect in case of errors

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipe details.");
        }

        const data = await response.json();

        if (!data.meals) {
          throw new Error("Recipe not found.");
        }

        setRecipe(data.meals[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [idMeal]);

  if (loading) {
    return <div className="text-center text-xl">Loading recipe details...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">
        Error: {error}. <br />
        <button
          className="mt-4 px-4 py-2 bg-brandYellow text-black font-bold rounded-lg"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </button>
      </div>
    );
  }

  if (!recipe) {
    return <div className="text-center text-xl">No recipe found.</div>;
  }

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="p-6 bg-brandBrown bg-opacity-[90%] min-h-screen flex flex-col items-center">
      <div className="container mx-auto bg-brandBrown p-8 rounded-lg shadow-lg w-full md:w-[50%]">
        <h1 className="text-5xl font-bold text-center mb-8 text-brandYellow">
          Recipe Details
        </h1>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto mb-8 rounded-lg shadow-md mx-auto"
        />
        <h1 className="text-4xl font-bold text-brandOrange mb-4 text-center">
          {recipe.strMeal}
        </h1>
        <p className="text-2xl font-semibold text-brandYellow mb-2 text-center">
          {recipe.strCategory}
        </p>
        <p className="text-lg font-light text-brandYellow mb-4 text-center">
          {recipe.strArea}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brandOrange text-center">
          Ingredients
        </h2>
        <ul className="list-none pl-6 mb-6 text-center">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg text-brandYellow">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-brandOrange text-center">
          Instructions
        </h2>
        <p className="text-lg text-brandYellow leading-relaxed mb-6 text-center break-word max-w-2xl mx-auto">
          {recipe.strInstructions}
        </p>

        {recipe.strYoutube && (
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-brandOrange">
              Demonstrative Video
            </h2>
            <iframe
              width="90%"
              height="315"
              src={`https://www.youtube.com/embed/${
                recipe.strYoutube.split("v=")[1]
              }`}
              title="YouTube Video"
              className="rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <a
          href={recipe.strSource || `https://www.themealdb.com/meal/${idMeal}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-lg font-bold text-brandOrange underline text-center"
        >
          View Full Recipe on TheMealDB
        </a>
      </div>
    </div>
  );
};

export default RecipeDetails;
