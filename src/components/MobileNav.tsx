import { Button } from "@/components/ui/button";
import { MoveRight, X, Menu } from "lucide-react";

interface MobileNavProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    navigationItems: { title: string; href: string }[];
    handleScroll: (href: string, offset: number) => void;
    isAuthenticated: boolean;
    handleLogout: () => void;
    navigate: (path: string) => void;
}

const MobileNav = ({ isOpen, setOpen, navigationItems, handleScroll, isAuthenticated, handleLogout, navigate }: MobileNavProps) => {
    return (
        <div className="flex w-full lg:hidden items-center justify-between px-4">
            <Button
                variant="ghost"
                className="absolute right-4 md:right-8 hover:bg-[#ccdfca] rounded-full transition-all duration-300"
                onClick={() => setOpen(!isOpen)}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {isOpen && (
                <div className="absolute top-20 border-t flex flex-col w-full md:w-1/4 right-0 my-2 rounded-xl bg-[#DAEAD9] shadow-md py-4 container gap-8 lg:hidden px-10">
                    {navigationItems.map((item) => (
                        <div key={item.title}>
                            <div className="flex flex-col gap-2 hover:underline">
                                <button
                                    onClick={() => handleScroll(item.href, -75)}
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <span className="text-sm">{item.title}</span>
                                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col items-center md:items-center sm:items-center gap-2">
                        {isAuthenticated ? (
                            <Button
                                onClick={handleLogout}
                                className="bg-[#ffffff] border border-red-500 text-black hover:bg-red-500 hover:text-white transition-all w-full cursor-pointer"
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                onClick={() => navigate('/login')}
                                className="bg-[#ffffff] border border-orange-500 text-black hover:bg-[#E99C00] transition-all w-full cursor-pointer"
                            >
                                User Login
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
