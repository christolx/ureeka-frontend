import { useState, useEffect } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import DonationModal from "@/components/DonationModal";

const Hero = () => {
    const [showDonationModal, setShowDonationModal] = useState(false);

    useEffect(() => {
        // Get client key from environment variable
        const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

        // Prevent script from being injected multiple times
        if (document.querySelector('script[src="https://app.sandbox.midtrans.com/snap/snap.js"]')) return;

        const midtransScript = document.createElement("script");
        midtransScript.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        midtransScript.setAttribute("data-client-key", clientKey);
        midtransScript.async = true;
        document.body.appendChild(midtransScript);

        return () => {
            if (midtransScript && document.body.contains(midtransScript)) {
                document.body.removeChild(midtransScript);
            }
        };
    }, []);

    return (
        <>
            <div className="w-full mt-10 py-5 lg:py-10 overflow-hidden bg-[linear-gradient(to_bottom,#F5EDD9_85%,transparent_100%)] flex items-center max-w-7xl mx-auto rounded-2xl">
                <div className="container p-6 mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-4 max-w-lg">
                            <Badge variant="outline" className="border-[#3b463b]">
                                We&apos;re FoodFund!
                            </Badge>

                            <h1 className="text-5xl md:text-7xl text-[#3b463b] tracking-tighter font-light leading-tight">
                                Feeding <span className="text-[#D1913C] font-serif">HOPE</span>, one meal at a time.
                            </h1>

                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                Hunger shouldn&apos;t be a barrier to a better future. Your support helps feed families and strengthen communities. 
                                Donate today and help us <b>thrive together!</b>
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-4 flex-wrap">
                                <Button size="lg" className="gap-3 shadow-md transition-all duration-200" variant="outline">
                                    Contact Us <PhoneCall className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="lg"
                                    className="gap-3 bg-[#FFC316] hover:bg-[#D1913C] transition-all duration-200"
                                    onClick={() => setShowDonationModal(true)}
                                >
                                    Donate Now <MoveRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="rounded-xl overflow-hidden w-full min-h-[300px]">
                            <img
                                src="/images/hero-img.png"
                                className="w-full h-full object-cover"
                                alt="People helping with food donations"
                            />
                        </div>
                    </div>
                </div>

                <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
            </div>

            <Toaster />
        </>
    );
};

export default Hero;
