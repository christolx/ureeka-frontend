import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DONATION_AMOUNTS = [
    { value: "50000", label: "Rp 50,000" },
    { value: "100000", label: "Rp 100,000" },
    { value: "250000", label: "Rp 250,000" },
    { value: "500000", label: "Rp 500,000" },
    { value: "custom", label: "Custom Amount" }
];

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
    const [selectedAmount, setSelectedAmount] = useState("100000");
    const [customAmount, setCustomAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        try {
            setLoading(true);

            // Calculate final amount
            const amount = selectedAmount === "custom"
                ? parseInt(customAmount.replace(/[^0-9]/g, ""))
                : parseInt(selectedAmount);

            if (isNaN(amount) || amount < 10000) {
                toast.error("Please enter a valid amount (minimum Rp 10,000)");
                setLoading(false);
                return;
            }

            // Generate order ID (timestamp + random string)
            const orderId = `DONATION-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

            // Get API URL from environment variables
            const baseUrl = import.meta.env.VITE_API_URL;
            const endpoint = `${baseUrl}/Midtrans/generate-snap-token`;

            // Call backend to get Midtrans snap token
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", // Send cookies
                body: JSON.stringify({
                    orderId,
                    amount
                })
            });

            if (!response.ok) {
                throw new Error("Failed to generate payment token");
            }

            const { snapToken } = await response.json();

            // Close the modal before opening Snap payment window
            onClose();

            // Open Midtrans Snap payment page
            // @ts-expect-error - Midtrans types not available
            window.snap.pay(snapToken, {
                onSuccess: function() {
                    toast.success("Thank you for your donation!", {
                        description: "Your payment was successful."
                    });
                },
                onPending: function() {
                    toast("Payment pending", {
                        description: "Please complete your payment"
                    });
                },
                onError: function() {
                    toast.error("Payment failed", {
                        description: "Please try again later"
                    });
                },
                onClose: function() {
                    toast("Payment canceled", {
                        description: "You closed the payment window"
                    });
                }
            });
        } catch (error) {
            console.error("Payment error:", error);
            toast.error("Something went wrong", {
                description: "Please try again later."
            });
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Make a Donation</DialogTitle>
                    <DialogDescription>
                        Your generosity helps feed families in need and strengthen our community.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    <RadioGroup
                        value={selectedAmount}
                        onValueChange={setSelectedAmount}
                        className="flex flex-col space-y-3"
                    >
                        {DONATION_AMOUNTS.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`amount-${option.value}`} />
                                <Label htmlFor={`amount-${option.value}`} className="text-base">
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>

                    {selectedAmount === "custom" && (
                        <div className="mt-4">
                            <Label htmlFor="custom-amount">Enter amount (IDR)</Label>
                            <Input
                                id="custom-amount"
                                type="text"
                                placeholder="Rp 150,000"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="mt-1"
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDonate}
                        className="bg-[#FFC316] hover:bg-amber-800"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                            </>
                        ) : (
                            'Donate Now'
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DonationModal;