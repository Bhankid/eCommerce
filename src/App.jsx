// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { HeroSlider } from "./components/HeroSlider";
import { HeroCard } from "./components/HeroCard";
import AppRoutes from "./components/Routes/AppRoutes";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <NavBar />
        <HeroSlider />
        <HeroCard />
        <AppRoutes />
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
