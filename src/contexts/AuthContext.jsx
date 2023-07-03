import React, { createContext, useState, useEffect } from 'react';
import api from '../api'; // Importar tu instancia de Axios

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const signIn = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      setToken(response.data.access_token);
      setUser(response.data.user);
      return false;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return error.response.data;
    }
  };

  const signUp = async (username, email, password) => {
    try {
      const response = await api.post('/signup', { username, email, password });
      setToken(response.data.access_token);
      setUser(response.data.user);
      return false;
    } catch (error) {
      return error.response.data.errors[0].message;
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user',  JSON.stringify(user));
    }
}, [user]);

  return (
    <AuthContext.Provider value={{ 
      user, 
      signIn, 
      signUp, 
      signOut,
      setIsSignUp,
      isSignUp,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };