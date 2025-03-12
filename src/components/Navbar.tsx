import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigationItems = [
        { title: "Home", href: "#home", description: "", },
        { title: "About", href: "#about", description: "", },
        { title: "Donations", href: "#donations", description: "", },
        { title: "Articles", href: "#articles", description: "", },
        { title: "Contact", href: "#contacts", description: "", },
    ];
    
    const [isOpen, setOpen] = useState(false);

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

    const handleScroll = (href: string) => {
        if (location.pathname === '/') {
            if (href === "#home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const section = document.getElementById(href.substring(1));
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        } else {
            navigate(`/${href}`);
        }
        setOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            navigate('/');
        }
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-transparent select-none">
            <div className="container relative mx-auto min-h-20 max-w-[1200px] grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-[#DAEAD9] px-16 rounded-b-4xl shadow-md">
                <div onClick={handleLogoClick} className="flex items-center lg:justify-center cursor-pointer">
                    <img src="/src/assets/logo-sementara-removebg-preview.png" alt='FoodFund' />
                </div>

                <div className="justify-start lg:flex hidden">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink className="hover:bg-transparent">
                                        <Button
                                            variant="ghost"
                                            className="relative cursor-pointer hover:bg-transparent"
                                            onClick={() => handleScroll(item.href)}
                                        >
                                            <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white">
                                                {item.title}
                                            </span>
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="items-center justify-end w-full gap-4 lg:flex md:flex hidden">
                    <Button onClick={() => navigate('/login')} className="bg-[#ffffff] border border-orange-500 text-black hover:bg-[#E99C00] transition-all cursor-pointer">
                        User Login
                    </Button>

                    <Button className="bg-[#FFC316] hover:bg-amber-800 transition-all cursor-pointer">
                        Join as NPO
                    </Button>
                </div>

                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" className="hover:bg-[#ccdfca] rounded-full transition-all duration-300" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>

                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full md:w-1/4 right-0 my-2 rounded-xl bg-[#DAEAD9] shadow-md py-4 container gap-8 lg:hidden px-10">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2 hover:underline">
                                        <button
                                            onClick={() => handleScroll(item.href)}
                                            className="flex justify-between items-center w-full text-left"
                                        >
                                            <span className="text-sm">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="flex flex-col items-center md:items-center sm:items-center gap-2">
                                <Button onClick={() => navigate('/login')} className="bg-[#ffffff] border border-orange-500 text-black hover:bg-[#E99C00] transition-all w-full cursor-pointer">
                                    User Login
                                </Button>
                                <Button className="bg-[#FFC316] hover:bg-amber-800 transition-all w-full cursor-pointer">
                                    Join as NPO
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;