import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="hero">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your one-stop destination for beautiful
            indoor plants. Discover a wide collection of healthy houseplants to
            make your home greener, fresher, and more peaceful.
          </p>

          <Link to="/plants">
            <button className="get-started-btn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;