
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { HeroSlider } from "./components/HeroSlider";
import { HeroCard } from "./components/HeroCar";
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <HeroSlider />
      <HeroCard />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
