import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieSection from "./components/MovieSection/MovieSection";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <MovieSection></MovieSection>
            <Footer></Footer>
        </div>
    );
}

export default App;
