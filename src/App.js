import "./App.css";
import BlogSection from "./components/BlogSection/BlogSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieSection from "./components/MovieSection/MovieSection";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <MovieSection></MovieSection>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
}

export default App;
