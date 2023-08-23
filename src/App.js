import Category from "./components/Catogory";
import Food from "./components/Food";
import Headline from "./components/Headline";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Headline />
     <Food />
     <Category />
    </div>
  );
}

export default App;
