import Navbar from "./components/navbar/navbar";
import AnimeCards from "./components/animeCards/animeCards";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cards-section">
        <h1 className="title">LISTA ANIME</h1>
        <AnimeCards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
