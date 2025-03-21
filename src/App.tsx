import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import ArticlesPage from "./pages/ArticlesPage";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import {AuthProvider} from "@/contexts/AuthContext.tsx";
import HomePage from "@/pages/HomePage.tsx";
import Footer from "@/components/Footer";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] pt-16">
                    <Navbar/>

                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/forgot-password" element={<ForgotPass/>}/>
                        <Route path="/reset-password" element={<ResetPass/>}/>
                        <Route path="/articles-page" element={<ArticlesPage/>}/>
                    </Routes>

                    <Footer/>
                </main>
            </Router>
        </AuthProvider>
    );
};

export default App;
