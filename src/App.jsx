
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { HeroSlider } from "./components/HeroSlider";
import { HeroCard } from "./components/HeroCard";
import AppRoutes from "./components/Routes/AppRoutes";
import { Footer } from "./components/Footer";
import { CartItems } from "./components/CartItems"; // Include CartItems

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <NavBar />
        <MainContent />
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

function MainContent() {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <>
          <HeroSlider />
          <HeroCard />
        </>
      )}
      <CartItems /> {/* Add CartItems to render products and cart */}
      <AppRoutes />
    </>
  );
}

export default App;
