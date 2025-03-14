import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Donations from "./components/Donations";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from "./components/About";
import LoginPage from "./pages/LoginPage";
import Contacts from "./components/Contacts";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import {AuthProvider} from "@/contexts/AuthContext.tsx";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] pt-16">
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={
                            <div className="p-4">
                                <section id="home">
                                    <Hero/>
                                </section>

                                <section id="about">
                                    <About/>
                                </section>

                                <section id="donations">
                                    <Donations/>
                                </section>

                                <section id="articles">
                                    <Articles/>
                                </section>

                                <section id="contacts">
                                    <Contacts/>
                                </section>
                            </div>
                        }/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/forgot-password" element={<ForgotPass/>}/>
                        <Route path="/reset-password" element={<ResetPass/>}/>
                    </Routes>

                    <Footer/>
                </main>
            </Router>
        </AuthProvider>
    );
};

export default App;
