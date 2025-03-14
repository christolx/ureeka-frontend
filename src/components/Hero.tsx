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

        const midtransScript = document.createElement('script');
        midtransScript.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        midtransScript.setAttribute('data-client-key', clientKey);
        document.body.appendChild(midtransScript);

        return () => {
            // Cleanup script when component unmounts
            if (document.body.contains(midtransScript)) {
                document.body.removeChild(midtransScript);
            }
        };
    }, []);

    return (
        <>
            <div className="w-full mt-10 py-5 lg:py-10 overflow-x-hidden bg-[linear-gradient(to_bottom,#F5EDD9_85%,transparent_100%)] flex items-center max-w-7xl mx-auto rounded-2xl">
                <div className="container p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2">
                        <div className="flex gap-2 flex-col">
                            <div>
                                <Badge variant="outline" className="border-[#3b463b]">We&apos;re FoodFund!</Badge>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <h1 className="text-5xl md:text-7xl max-w-lg text-[#3b463b] tracking-tighter text-left font-regular">
                                    Feeding <span className="text-[#D1913C] font-serif text-7xl">HOPE</span>, one meal at a time.
                                </h1>

                                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                    Hunger shouldn&apos;t be a barrier to a better future. Your support helps feed families and strengthen communities. Donate today and help us <b>thrive together!</b>
                                </p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Button size="lg" className="gap-4 shadow-sm transition-all duration-150 cursor-pointer" variant="outline">
                                    Contact Us <PhoneCall className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="lg"
                                    className="gap-4 bg-[#FFC316] hover:bg-amber-800 transition-all cursor-pointer"
                                    onClick={() => setShowDonationModal(true)}
                                >
                                    Donate Now <MoveRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="bg-muted rounded-xl overflow-hidden w-full">
                            <img src="/images/hero-img.png" className="w-full h-full object-cover" alt="People helping with food donations" />
                        </div>
                    </div>
                </div>

                <DonationModal
                    isOpen={showDonationModal}
                    onClose={() => setShowDonationModal(false)}
                />
            </div>

            <Toaster />
        </>
    );
};

export default Hero;