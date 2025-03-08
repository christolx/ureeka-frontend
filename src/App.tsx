import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Donations from "./components/Donations";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from "./components/About";
import LoginPage from "./pages/LoginPage"; // Import your LoginPage component

const App = () => {
    return (
        <Router>
            <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#FFFFFF] pt-16">
                <Navbar />

                <Routes>
                    <Route path="/" element={
                        <>
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
                        </>
                    } />

                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
