import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";
import RecipeDetails from "./RecipeDetails";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
