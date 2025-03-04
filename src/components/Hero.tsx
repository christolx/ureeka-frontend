import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => (
    <div className="w-full py-20 lg:py-40 overflow-x-hidden bg-[linear-gradient(to_bottom,#F5EDD9_85%,transparent_100%)]">
        <div className="container p-4 mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                <div className="flex gap-4 flex-col">
                    <div>
                        <Badge variant="outline" className="border-[#3b463b]">We&apos;re FoodFund!</Badge>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-lg text-[#3b463b] tracking-tighter text-left font-regular">
                            Feeding <b><i>HOPE</i></b>, one meal at a time.
                        </h1>

                        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                            Hunger shouldn&apos;t be a barrier to a better future. Your support helps feed families and strengthen communities. Donate today and help us <b>thrive together!</b>
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button size="lg" className="gap-4 shadow-sm transition-all duration-150 cursor-pointer" variant="outline">
                            Contact Us <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4 bg-[#FFC316] shadow-sm hover:bg-[#ff9a16] transition-all duration-150 cursor-pointer">
                            Donate Now <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="bg-muted rounded-xl overflow-hidden w-full">
                    <img src="/src/assets/hero-img.png" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
);

export default Hero