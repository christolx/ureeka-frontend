import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navigationItems = [
        { title: "Home", href: "/", description: "", },
        { title: "About", href: "/", description: "", },
        { title: "Campaign", href: "/", description: "", },
        { title: "Blog", href: "/", description: "", },
        { title: "Contact", href: "/", description: "", },
    ];
    
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-[#DAEAD9] px-16 rounded-b-4xl shadow-md">
                {/* logo */}
                <div className="flex items-center lg:justify-center cursor-pointer">
                    <img src="/src/assets/logo-sementara-removebg-preview.png" alt='FoodFund' />
                </div>

                {/* desktop navbar */}
                <div className="justify-start lg:flex hidden">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-4">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink className="hover:bg-transparent !important">
                                                <Button variant="ghost" className="relative cursor-pointer hover:bg-transparent">
                                                    <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white">
                                                        {item.title}
                                                    </span>
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                {/* donate button */}
                <div className="flex justify-end w-full gap-4">
                    <div className="border-r hidden md:inline"></div>
                    <Button className="bg-[#FFC316] hover:bg-amber-800 transition-all cursor-pointer !important">Donate</Button>
                </div>

                {/* mobile navbar */}
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>

                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full left-0 bg-background shadow-lg py-4 container gap-8 lg:hidden">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                        <Link
                                            to={item.href}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-lg">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar