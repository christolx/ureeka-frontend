import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Donations from "./components/Donations";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from "./components/About";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <Router>
            <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] pt-16">
                <Navbar />

                <Routes>
                    <Route path="/" element={
                        <div className="p-4">
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
                        </div>
                    } />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>

                <Footer />
            </main>
        </Router>
    );
};

export default App;
