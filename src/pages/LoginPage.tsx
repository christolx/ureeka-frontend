import { useState } from "react";
import EyeOpen from "../assets/icons/eye.svg";
import EyeClose from "../assets/icons/eye-off.svg";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleSubmit = async () => {
        setError("");

        if (!isLoginMode) {
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                setError("Enter a valid email address.");
                return;
            }

            if (!username.trim()) {
                setError("Username cannot be empty.");
                return;
            }

            if (!password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
                setError("Password must be at least 8 characters long and include at least one letter and one number.");
                return;
            }

            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
        }

        let endpoint = "";
        if (isLoginMode) {
            endpoint = "http://localhost:5139/account/login";
        } else {
            endpoint = "http://localhost:5139/account/register";
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(isLoginMode ? { username, password } : { email, username, password }),
            });

            if (!response.ok) throw new Error("Request failed: " + response.statusText);
            const data = await response.json();
            console.log(isLoginMode ? "Login successful" : "Registration successful", data);

            localStorage.setItem("token", data.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
                <div className="flex flex-col items-center">
                    <img src="/src/assets/logo-sementara-removebg-preview.png" alt="FoodFund" />
                    <h2 className="font-bold mt-2 text-center">
                        {isLoginMode ? "Welcome Back" : "Create an Account"}
                    </h2>
                    <span className="text-sm mb-6">
                        {isLoginMode ? "Enter your details to login." : "Sign up to get started."}
                    </span>
                </div>

                {!isLoginMode && (
                    <>
                        <label className="block text-md font-medium text-gray-700 px-1">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-sm w-full p-2 mb-2 border rounded-lg"
                        />
                    </>
                )}

                <label className="block text-md font-medium text-gray-700 px-1">Username</label>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-sm w-full p-2 mb-2 border rounded-lg"
                />

                <label className="block text-md font-medium text-gray-700 px-1">Password</label>
                <div className="relative mb-2">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm w-full p-2 border rounded-lg pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-2/4 transform -translate-y-1/2"
                    >
                        <img src={showPassword ? EyeOpen : EyeClose} alt="Toggle Password" className="w-5 h-5" />
                    </button>
                </div>

                {!isLoginMode && (
                    <>
                        <label className="block text-md font-medium text-gray-700 px-1">Confirm Password</label>
                        <div className="relative mb-2">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="**********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="text-sm w-full p-2 border rounded-lg pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute right-3 top-2/4 transform -translate-y-1/2"
                            >
                                <img src={showConfirmPassword ? EyeOpen : EyeClose} alt="Toggle Password" className="w-5 h-5" />
                            </button>
                        </div>
                    </>
                )}

                {error && <p className="text-[#a50000] text-sm mb-2">{error}</p>}

                {/* sign in/login toggle */}
                <div className="mb-6 px-1">
                    <button
                        onClick={() => setIsLoginMode((prev) => !prev)}
                        className="text-[#07649b] text-sm font-bold hover:text-[#7ebee2] transition-all duration-150"
                    >
                        {isLoginMode ? "Don't have an account? Sign up here!" : "Have an account already? Login here."}
                    </button>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#40493f] text-white p-2 rounded-md cursor-pointer hover:bg-[#1e221d] transition-all duration-150 mb-4"
                >
                    {isLoginMode ? "Login" : "Register"}
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
