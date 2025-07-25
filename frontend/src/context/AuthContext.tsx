import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

interface AuthContextType {
  user: any;
  login: (response: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const history = useHistory();

  const login = (response: any) => {
    setUser(response.profileObj);
    // Save user info to local storage or context
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    history.push('/dashboard'); // Redirect to dashboard after login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    history.push('/'); // Redirect to home after logout
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};