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

interface MidtransResult {
    order_id: string;
    status_code: string;
    transaction_status: string;
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

            const amount = selectedAmount === "custom"
                ? parseInt(customAmount.replace(/[^0-9]/g, ""))
                : parseInt(selectedAmount);

            if (isNaN(amount) || amount < 10000) {
                toast.error("Please enter a valid amount (minimum Rp 10,000)");
                setLoading(false);
                return;
            }

            const orderId = `DONATION-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
            const baseUrl = import.meta.env.VITE_API_URL;
            const endpoint = `${baseUrl}/Midtrans/generate-snap-token`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ orderId, amount })
            });

            if (!response.ok) throw new Error("Failed to generate payment token");

            const { snapToken } = await response.json();
            setLoading(false);
            onClose();

            // @ts-expect-error - Midtrans types not available
            window.snap.pay(snapToken, {
                onSuccess: (result: MidtransResult) => {
                    window.location.href = `/?order_id=${result.order_id}&status_code=${result.status_code}&transaction_status=${result.transaction_status}`;
                    toast.success("Thank you for your donation!", { description: "Your payment was successful." });
                },
                onPending: (result: MidtransResult) => {
                    window.location.href = `/?order_id=${result.order_id}&status_code=${result.status_code}&transaction_status=${result.transaction_status}`;
                    toast("Payment pending", { description: "Please complete your payment" });
                },
                onError: (result?: MidtransResult) => {
                    if (result?.order_id) {
                        window.location.href = `/?order_id=${result.order_id}&status_code=${result.status_code || "500"}&transaction_status=error`;
                    }
                    toast.error("Payment failed", { description: "Please try again later" });
                },
                onClose: () => {
                    toast("Payment canceled", { description: "You closed the payment window" });
                }
            });
        } catch (error) {
            console.error("Payment error:", error);
            toast.error("Something went wrong", { description: <span className="text-red-600">Unauthorized: Login First.</span> });
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl">Make a Donation</DialogTitle>
                    <DialogDescription className="text-sm sm:text-base">
                        Your generosity helps feed families in need and strengthen our community.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="flex flex-col gap-2">
                        {DONATION_AMOUNTS.map((option) => (
                            <div key={option.value} className="flex items-center gap-2">
                                <RadioGroupItem value={option.value} id={`amount-${option.value}`} />
                                <Label htmlFor={`amount-${option.value}`} className="text-sm sm:text-base">{option.label}</Label>
                            </div>
                        ))}
                    </RadioGroup>

                    {selectedAmount === "custom" && (
                        <div className="mt-4">
                            <Label htmlFor="custom-amount" className="text-sm sm:text-base">Enter amount (IDR)</Label>
                            <Input
                                id="custom-amount"
                                type="text"
                                placeholder="Rp 150,000"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="mt-1 w-full"
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
                    <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDonate}
                        className="w-full sm:w-auto bg-[#FFC316] hover:bg-amber-800"
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
