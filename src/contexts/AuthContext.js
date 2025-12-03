import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '@/data/mockData';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('studentlife_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    // Mock authentication - in production this would be a real API call
    const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      localStorage.setItem('studentlife_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return { success: true };
    }
    setIsLoading(false);
    return { success: false, error: 'Invalid email or password. Try demo123 as password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('studentlife_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
