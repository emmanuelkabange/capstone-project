import React from "react";

const RecipeDetailsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      {/* Recipe Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Recipe Image */}
        <img
          src="/2.jpg"
          alt="Vegetable Stir-Fry"
          className="w-full h-64 object-cover"
        />

        {/* Recipe Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">Vegetable Stir-Fry</h1>
          <p className="text-gray-600 mb-4">Main Course | Chinese</p>

          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Vegetables (bell peppers, broccoli, carrots)</li>
            <li>Soy sauce</li>
            <li>Olive oil</li>
            <li>Garlic</li>
            <li>Ginger</li>
            <li>Salt and pepper to taste</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Preparation Steps</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>Heat olive oil in a pan over medium heat.</li>
            <li>Add garlic and ginger, sauté for a minute.</li>
            <li>Add the vegetables and stir-fry for 5-7 minutes.</li>
            <li>Pour in the soy sauce and mix well.</li>
            <li>Season with salt and pepper, and serve hot.</li>
          </ol>

          {/* YouTube Video Section */}
          <h2 className="text-2xl font-semibold mb-4">Watch the Video</h2>
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube link
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Source Link */}
          <a
            href="https://www.themealdb.com/meal/52772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            View Full Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
