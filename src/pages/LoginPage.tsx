import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import EyeOpen from "../assets/icons/eye.svg";
import EyeClose from "../assets/icons/eye-off.svg";
import {useAuth} from "../contexts/AuthContext";

const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useAuth(); // Use the auth context

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async () => {
        setError("");

        if (isLoginMode) {
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                setError("Enter a valid email address.");
                return;
            }

            if (!password) {
                setError("Password cannot be empty.");
                return;
            }
        } else {
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                setError("Enter a valid email address.");
                return;
            }

            if (!username || !username.trim()) {
                setError("Username cannot be empty.");
                return;
            }

            if (!password || !/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)) {
                setError("Password must be at least 8 characters long and include at least one letter and one number.");
                return;
            }

            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
        }

        const baseUrl = import.meta.env.VITE_API_URL;

        let endpoint;

        if (isLoginMode) {
            endpoint = `${baseUrl}/account/login?useCookies=true`;
        } else {
            endpoint = `${baseUrl}/account/register`;
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(isLoginMode ? {email, password} : {email, username, password}),
                credentials: "include" // Important for cookies to be sent and stored
            });

            if (!response.ok) {
                const errorText = await response.text();
                let errorMessage = "Authentication failed";

                try {
                    const errorData = JSON.parse(errorText);
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    // If parsing fails, use the raw text if available
                    if (errorText) errorMessage = errorText;
                }

                throw new Error(errorMessage);
            }

            console.log(isLoginMode ? "Login successful" : "Registration successful");

            // Update auth state
            login();

            // Navigate to home page
            navigate('/');

        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "Authentication failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-contain bg-no-repeat bg-center px-4"
             style={{ backgroundImage: "url('/images/food-donation.jpg')" }}>
            <div className="bg-[#F5EDD9] p-6 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div className="flex flex-col items-center">
                    <img src="/images/logo-sementara-removebg-preview.png" alt="FoodFund" className="w-24 sm:w-32"/>
                    <h2 className="font-bold mt-2 text-center text-lg sm:text-xl">
                        {isLoginMode ? "Welcome Back" : "Create an Account"}
                    </h2>
                    <span className="text-sm sm:text-base mb-6 text-center">
                        {isLoginMode ? "Enter your details to login." : "Sign up to get started."}
                    </span>
                </div>
    
                <label className="block text-md font-medium text-gray-700 px-1">Email</label>
                <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm w-full p-3 border rounded-lg bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#6E826D]"
                />
    
                {!isLoginMode && (
                    <>
                        <label className="block text-md font-medium text-gray-700 px-1">Username</label>
                        <input
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-sm w-full p-3 border rounded-lg bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#6E826D]"
                        />
                    </>
                )}
    
                <label className="block text-md font-medium text-gray-700 px-1">Password</label>
                <div className="relative mb-2">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-sm w-full p-3 border rounded-lg pr-12 bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#6E826D]" 
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-2/4 transform -translate-y-1/2 w-6 h-6"
                    >
                        <img src={showPassword ? EyeOpen : EyeClose} alt="Toggle Password"/>
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
                                className="text-sm w-full p-3 border rounded-lg pr-12 bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#6E826D]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute right-3 top-2/4 transform -translate-y-1/2 w-6 h-6"
                            >
                                <img src={showConfirmPassword ? EyeOpen : EyeClose} alt="Toggle Password"/>
                            </button>
                        </div>
                    </>
                )}
    
                {error && <p className="text-[#a50000] text-sm mb-2">{error}</p>}
    
                {isLoginMode ? (
                    <div className="mb-6 px-1 flex flex-col sm:flex-row justify-between text-center sm:text-left">
                        <button
                            onClick={() => navigate('/forgot-password')}
                            className="text-[#07649b] text-sm hover:text-[#7ebee2] transition-all duration-150"
                        >
                            Forgot password?
                        </button>
    
                        <button
                            onClick={() => navigate('/reset-password')}
                            className="text-[#07649b] text-sm hover:text-[#7ebee2] transition-all duration-150"
                        >
                            Reset password?
                        </button>
                    </div>
                ) : null}
    
                {/* sign in/login toggle */}
                <div className="mb-6 px-1 text-center">
                    <button
                        onClick={() => setIsLoginMode((prev) => !prev)}
                        className="text-[#034709] text-sm font-bold hover:text-[#04b813] transition-all duration-150"
                    >
                        {isLoginMode ? "Don't have an account? Sign up here!" : "Have an account already? Login here."}
                    </button>
                </div>
    
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#40493f] text-white p-3 rounded-md cursor-pointer hover:bg-[#6E826D] transition-all duration-150 mb-4"
                >
                    {isLoginMode ? "Login" : "Register"}
                </button>
            </div>
        </div>
    );    
};

export default LoginPage;