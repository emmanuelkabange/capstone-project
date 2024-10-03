import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [recipeName, setRecipeName] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!recipeName.trim()) {
      alert("Please enter a recipe name.");
      return;
    }

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
      );
      const data = await response.json();

      console.log("API Data:", data); // Log API data for debugging

      if (data.meals) {
        navigate("/results", { state: { recipes: data.meals } });
      } else {
        alert("No recipes found!");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      alert("Failed to fetch recipes. Please try again later.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="bg-cover bg-center flex-1"
      style={{ backgroundImage: 'url("homepagebg.jpg")' }}
    >
      <header className="text-center py-16">
        {/* Logo */}
        <img
          src="dishdashlogotransparent.png"
          alt="DishDash Logo"
          className="top-4 left-4 mx-auto w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
        />

        {/* Header Text */}
        <h1 className="text-[45px] font-bold text-brandYellow  sm:mt-[30px] leading-[60px]">
          Discover <span className="text-brandOrange">Quick</span>,{" "}
          <span className="text-brandOrange">Delicious</span> Recipes With{" "}
          <br />
          <span className="text-brandOrange">DishDash</span>
        </h1>

        {/* Search Bar */}
        <div className="mt-[20] flex justify-center items-center">
          <input
            type="text"
            placeholder="Type your recipe..."
            className="bg-white w-[687px] h-[85px] rounded-[80px] placeholder:text-black font-semibold pl-6 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-brandYellow mt-[35px]"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div>
          <button
            className="ml-[21px] mt-[25px] w-[123px] h-[48px] bg-white text-black font-bold rounded-[50px] shadow-lg focus:outline-none focus:ring-2 focus:ring-brandYellow sm:hidden"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
