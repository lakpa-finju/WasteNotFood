import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Index from "./components/Index";

function App() {

  return (
    <Router>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
