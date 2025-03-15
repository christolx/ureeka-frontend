import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavLinksProps {
    navigationItems: { title: string; href: string }[];
    handleScroll: (href: string, offset: number) => void;
}

const NavLinks = ({ navigationItems, handleScroll }: NavLinksProps) => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
                {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink className="hover:bg-transparent">
                            <Button
                                variant="ghost"
                                className="relative cursor-pointer hover:bg-transparent"
                                onClick={() => handleScroll(item.href, -75)}
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
    );
};

export default NavLinks;
