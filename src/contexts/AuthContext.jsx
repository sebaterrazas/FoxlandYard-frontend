import React, { createContext, useState } from 'react';
import api from '../api'; // Importar tu instancia de Axios

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    try {
      const response = await api.post('/users/login', { email, password }); // Cambiar la ruta según tu API
      setUser(response.data);
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  const signUp = async (username, email, password) => {
    try {
      const response = await api.post('/users', { username, email, password });
      setUser(response.data);
      return true;
    } catch (error) {
      console.error('Error al registrarse:', error);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };