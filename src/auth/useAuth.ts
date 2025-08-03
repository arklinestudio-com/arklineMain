import { useState } from 'react';

const ADMIN_USERNAME = 'A9r9k9l9i9ne9studio';
const ADMIN_PASSWORD = 'Ark_line$tudio_0009'; // In a real app, this should be properly secured
const AUTH_KEY = 'isAdminAuthenticated';

export const useAuth = () => {
  // Initialize from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  });

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
};
