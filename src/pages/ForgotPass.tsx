import { useState, useEffect, FormEvent } from "react";

const ForgotPass = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError("Enter a valid email address.");
            return;
        }

        const endpoint = `${baseUrl}/account/forgotPassword`;

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error("Request failed: " + response.statusText);

            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-xl sm:text-2xl text-center font-bold mb-4">Forgot Password</h1>

                <form onSubmit={handleEmail} className="w-full">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-sm sm:text-base w-full p-2 mb-2 border rounded-lg"
                            required
                        />
                    </div>

                    {error && <p className="text-[#a50000] text-sm sm:text-base mb-2">{error}</p>}

                    {success && (
                        <p className="text-green-500 text-sm sm:text-base mb-4">
                            If an account with this email exists and is verified, you will receive a code.
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#40493f] text-white p-2 rounded-md cursor-pointer hover:bg-[#1e221d] transition-all duration-150 mb-4 text-sm sm:text-base"
                    >
                        Send request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;