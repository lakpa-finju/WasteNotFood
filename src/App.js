import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Recipes from "./components/Recipes"; 

function App() {

  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const [recipes, setRecipes] = useState([])

  const handleRecipesChange = (recipes) => {
    setRecipes([recipes])
  }

  return (
    <Router>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home displayImage = {image} updateImage = {handleImageChange}/>} />
        <Route path="/recipes" element={<Recipes foodRecipes={recipes} updateRecipes={handleRecipesChange}/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
