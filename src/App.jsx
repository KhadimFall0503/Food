import Hero from "./components/Hero";
import Plats from "./components/Plats";
import About from "./components/About";
import Contact from "./components/Contact";
import Burger from "./components/Burger";
import Future from "./components/Future";
import Temoignages from "./components/Temoignages";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Burger />
      <Plats />
      <Future />
      <Temoignages />
      <Footer />
    </div>
  );
}

export default App;
