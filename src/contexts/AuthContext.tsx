import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface UserInfo {
    email: string;
    claimsIdentifier: boolean;
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    userInfo: UserInfo | null;
    login: () => void;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL;
                const response = await fetch(`${baseUrl}/account/manage/info`, {
                    headers: {
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    setUserInfo(null);
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                setIsAuthenticated(false);
                setUserInfo(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_URL;
            await fetch(`${baseUrl}/account/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            setIsAuthenticated(false);
            setUserInfo(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            userInfo,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};