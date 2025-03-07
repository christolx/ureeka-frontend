import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Donations from "./components/Donations";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#FFFFFF] pt-16">
            <Navbar />

            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="donations">
                <Donations />
            </section>
            <section id="articles">
                <Articles />
            </section>
            <Footer />
        </main>
    );
};

export default App;
