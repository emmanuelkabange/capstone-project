import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const recipes = location.state?.recipes || [];

  // Log the recipes to the console for debugging
  console.log("Recipes:", recipes);

  return (
    <div className="p-6 bg-brandGrey min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Recipe Results
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-brandOrange rounded-lg overflow-hidden hover:opacity-[75%] shadow-lg"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-black text-2xl font-bold">
                    {recipe.strMeal}
                  </h3>
                  <p className="mt-2 text-brandYellow font-semibold">
                    {recipe.strCategory}
                  </p>
                  <Link
                    to={`/recipe/${recipe.idMeal}`} // Link to the Recipe Details page
                    className="mt-4 inline-block px-4 py-2 bg-brandYellow text-black font-bold rounded-lg shadow-lg border border-transparent hover:border-black"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No recipes found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
