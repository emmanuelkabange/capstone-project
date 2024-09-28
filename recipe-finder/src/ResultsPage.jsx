const ResultsPage = () => {
  return (
    <div className="bg-brandGrey min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Recipe Results
      </h1>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Static Recipe Card */}
        <div className="bg-brandOrange rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Recipe Image */}
          <img
            src="/2.jpg"
            alt="Vegetable Stir-Fry"
            className="w-full h-48 object-cover"
          />

          {/* Recipe Details */}
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-2">Vegetable Stir-Fry</h2>
            <p className="text-black font-normal">Main Course</p>
            <p className="text-black font-light">Chinese</p>
          </div>

          {/* View Details Button */}
          <div className="p-4 bg-gray-100">
            <button className="w-full bg-brandYellow text-white py-2 px-4 rounded-md hover: border-2 border-transparent hover:border-brandOrange hover:bg-brandYellow active:border-brandGrey transition-all duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
