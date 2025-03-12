import { useState, useEffect, FormEvent } from "react";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleReset = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError("Enter a valid email address.");
            return;
        }

        if (!code) {
            setError("Code cannot be empty.");
            return;
        }

        if (!newPassword || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword)) {
            setError("Password must be at least 8 characters long and include at least one letter and one number.");
            return;
        }

        const endpoint = "http://localhost:5139/account/reset-password";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code, newPassword }),
            });

            if (!response.ok) throw new Error("Request failed: " + response.statusText);

            setSuccess(true);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
                <h1 className="text-xl text-center font-bold mb-4">Reset Password</h1>
                <form onSubmit={handleReset} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-sm w-full p-2 mb-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Reset Code
                        </label>
                        <input
                            type="text"
                            placeholder="Enter reset code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="text-sm w-full p-2 mb-2 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="text-sm w-full p-2 mb-2 border rounded-lg"
                            required
                        />
                    </div>

                    {error && <p className="text-[#a50000] text-sm mb-2">{error}</p>}

                    {success && (
                        <p className="text-green-500 text-sm mb-4">
                            Password reset successfully!
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#40493f] text-white p-2 rounded-md cursor-pointer hover:bg-[#1e221d] transition-all duration-150 mb-4"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;