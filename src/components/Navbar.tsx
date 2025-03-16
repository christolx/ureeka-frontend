import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import NavLinks from "@/components/NavLinks";
import MobileNav from "@/components/MobileNav";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, logout } = useAuth(); 
    const [isOpen, setOpen] = useState<boolean>(false);

    const navigationItems = [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "Donations", href: "#donations" },
        { title: "Articles", href: "#articles" },
        { title: "Contact", href: "#contacts" },
    ];

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleScroll = (href: string, offset: number) => {
        if (location.pathname === '/') {
            if (href === "#home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const section = document.getElementById(href.substring(1));
                if (section) {
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY + offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            }
        } else {
            navigate(`/${href}`);
        }
        setOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate('/');
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-transparent select-none">
            <div className="container relative mx-auto min-h-20 max-w-[1200px] grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-[#DAEAD9] px-16 rounded-b-4xl shadow-md">
                {/* Logo */}
                <div onClick={handleLogoClick} className="flex items-center lg:justify-center cursor-pointer">
                    <img src="/images/logo-sementara-removebg-preview.png" alt='FoodFund' />
                </div>

                {/* Desktop Navigation */}
                <div className="justify-start lg:flex hidden">
                    <NavLinks navigationItems={navigationItems} handleScroll={handleScroll} />
                </div>

                {/* Authentication Buttons */}
                <div className="items-center justify-end w-full gap-4 lg:flex md:flex hidden">
                    {isAuthenticated ? (
                        <Button
                            onClick={handleLogout}
                            className="bg-[#ffffff] border border-red-500 text-black hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button
                            onClick={() => navigate('/login')}
                            className="bg-[#ffffff] border border-orange-500 text-black hover:bg-[#E99C00] transition-all cursor-pointer"
                        >
                            User Login
                        </Button>
                    )}
                </div>

                {/* Mobile Navigation */}
                <MobileNav
                    isOpen={isOpen}
                    setOpen={setOpen}
                    navigationItems={navigationItems}
                    handleScroll={handleScroll}
                    isAuthenticated={isAuthenticated}
                    handleLogout={handleLogout}
                    navigate={navigate}
                />
            </div>
        </header>
    );
};

export default Navbar;
