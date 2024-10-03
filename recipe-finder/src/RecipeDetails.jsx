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
    <div className="p-6 bg-brandOrange min-h-screen">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-[40%] h-[auto] mb-8 rounded-lg shadow-md"
        />
        <h1 className="text-4xl font-bold text-brandOrange mb-4">
          {recipe.strMeal}
        </h1>
        <p className="text-2xl font-semibold text-brandYellow mb-2">
          {recipe.strCategory}
        </p>
        <p className="text-lg font-semibold text-brandYellow mb-4">
          {recipe.strArea}
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brandOrange">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 mb-6">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">
              {ingredient}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-brandOrange">
          Instructions
        </h2>
        <p className="text-lg mb-6">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-brandOrange">
              Demonstrative Video
            </h2>
            <iframe
              width="50%"
              height="400"
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
          className="block mt-6 text-lg font-bold text-brandOrange underline"
        >
          View Full Recipe on TheMealDB
        </a>
      </div>
      <footer className="bg-black bg-opacity-[70%] text-brandYellow p-6 w-2/3 mx-auto border border-transparent rounded-2xl mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Links Section */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/emmanuelkabange"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandOrange"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a10 10 0 00-3.162 19.493c.5.09.684-.217.684-.483v-1.69c-2.777.603-3.366-1.342-3.366-1.342-.455-1.157-1.11-1.465-1.11-1.465-.909-.62.07-.608.07-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.34 1.088 2.91.832.09-.648.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.946 0-1.093.39-1.987 1.032-2.686-.104-.252-.447-1.267.097-2.64 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.852.004 1.71.115 2.51.337 1.91-1.295 2.75-1.025 2.75-1.025.545 1.373.202 2.388.098 2.64.644.699 1.032 1.593 1.032 2.686 0 3.846-2.339 4.691-4.566 4.94.36.31.682.922.682 1.86v2.756c0 .267.183.576.687.48A10 10 0 0012 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com/emmanuelkabange"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brandOrange"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.507-4.192 11.855-11.855 11.855-2.353 0-4.54-.685-6.385-1.877a8.432 8.432 0 006.216-1.74 4.198 4.198 0 01-3.922-2.91 5.265 5.265 0 00.79.063c1.036 0 1.984-.36 2.739-.965a4.187 4.187 0 01-3.358-4.106v-.051c.56.31 1.202.498 1.883.523a4.186 4.186 0 01-1.867-3.482c0-.768.207-1.487.57-2.104a11.877 11.877 0 008.62 4.374 4.723 4.723 0 01-.103-.961 4.186 4.186 0 017.242-2.862 8.31 8.31 0 002.656-1.015 4.196 4.196 0 01-1.837 2.309 8.35 8.35 0 002.415-.654 8.94 8.94 0 01-2.1 2.18z" />
              </svg>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="mt-4 md:mt-0 text-center">
            <p className="text-sm">Made by Emmanuel Kabange &copy; 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetails;
