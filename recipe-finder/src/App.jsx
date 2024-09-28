import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import RecipeCard from "./ResultsPage";
import RecipeDetailsPage from "./RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Results" element={<RecipeCard />} />
        <Route path="/Details" element={<RecipeDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
