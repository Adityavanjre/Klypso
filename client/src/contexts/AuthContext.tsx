import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import axios from 'axios';

interface User {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => { },
    logout: () => { },
    isLoading: true
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // ... context implementation
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });
            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
