import { useState, useEffect, createContext, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    const handleLoginSuccess = (response) => {
        setUser(response.profileObj);
        // Save token and user info to local storage or context
        localStorage.setItem('token', response.tokenId);
        history.push('/dashboard'); // Redirect to dashboard after login
    };

    const handleLoginFailure = (response) => {
        console.error('Login failed:', response);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        history.push('/'); // Redirect to home after logout
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Optionally, verify token and fetch user info
            // setUser(fetchedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, handleLoginSuccess, handleLoginFailure, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};