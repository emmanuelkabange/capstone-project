import React from "react";

const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: 'url("homepagebg.jpg")' }}
    >
      <header className="text-center py-16">
        {/* Logo */}
        <img
          src="dishdashlogotransparent.png"
          alt="DishDash Logo"
          className=" top-4 left-4 mx-auto w-[200px] h-[200px]"
        />

        {/* Header Text */}
        <h1 className="text-[45px] font-bold text-brandYellow mt-[65px] leading-[60px]">
          Discover <span class="text-brandOrange">Quick</span>, Delicious
          Recipes With <br />
          DishDash
        </h1>

        {/* Search Bar */}
        <div className="mt-[20] flex justify-center items-center">
          <input
            type="text"
            placeholder="Type your recipe..."
            className="bg-white w-[687px] h-[85px] rounded-[80px] placeholder:text-black font-semibold pl-6 py-4 shadow-md focus:outline-none focus:ring-2 focus:ring-brandYellow mt-[35px]"
          />
          <button className="ml-[21px] mt-[35px] w-[123px] h-[48px] bg-white text-black font-bold rounded-[50px] shadow-lg focus:outline-none focus:ring-2 focus:ring-brandYellow">
            Search
          </button>
        </div>

        {/* Explore Recipes Text */}
        <h2 className="text-[35px] mt-[60px] mb-[-45px] font-bold text-brandYellow">
          <span class="text-brandOrange">Explore</span> Other Recipes
        </h2>
      </header>

      {/* Recipe Cards */}
      <div className="flex justify-between space-x-4 ml-[40px] mr-[40px]">
        {/* Card 1 */}
        <div className="bg-black rounded-lg overflow-hidden shadow-lg w-80">
          <img
            src="/2.jpg"
            alt="Vegetable Stir-Fry"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold">Quinoa Salad</h3>
            <p className="mt-2 text-white">
              A refreshing salad with quinoa, cucumbers, tomatoes, and a lemon
              vinaigrette.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg w-80">
          <img
            src="/path-to-recipe-image-2.jpg"
            alt="Chicken Curry"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold">Quinoa Salad</h3>
            <p className="mt-2 text-white">
              A refreshing salad with quinoa, cucumbers, tomatoes, and a lemon
              vinaigrette.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg w-80">
          <img
            src="/path-to-recipe-image-3.jpg"
            alt="Beef Tacos"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold">Quinoa Salad</h3>
            <p className="mt-2 text-white">
              A refreshing salad with quinoa, cucumbers, tomatoes, and a lemon
              vinaigrette.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg w-80">
          <img
            src="/path-to-recipe-image-4.jpg"
            alt="Pasta Primavera"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold">Quinoa Salad</h3>
            <p className="mt-2 text-white">
              A refreshing salad with quinoa, cucumbers, tomatoes, and a lemon
              vinaigrette.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-black bg-opacity-50 rounded-lg overflow-hidden shadow-lg w-80">
          <img
            src="/path-to-recipe-image-5.jpg"
            alt="Quinoa Salad"
            className="w-full h-52 object-cover"
          />
          <div className="p-6 bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold">Quinoa Salad</h3>
            <p className="mt-2 text-white">
              A refreshing salad with quinoa, cucumbers, tomatoes, and a lemon
              vinaigrette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
