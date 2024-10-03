import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";
import RecipeDetails from "./RecipeDetails";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
