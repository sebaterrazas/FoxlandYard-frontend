import React, { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const SignInSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, signIn, signUp, signOut } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    console.log('Correo electrónico:', email, 'Contraseña:', password);
    try {
        const success = await signIn(email, password);
        if (success) {
            // Aquí puedes redirigir, mostrar un mensaje, etc.
        } else {
            // Aquí puedes mostrar un mensaje de error, por ejemplo
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre de usuario:', username, 'Correo electrónico:', email, 'Contraseña:', password);
    // Aquí puedes hacer la llamada a la API para registrarse
  };

  const toggleSignInSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? (
        <h1>Registrarse</h1>
      ) : (
        <h1>Iniciar sesión</h1>
      )}
      <form onSubmit={isSignUp ? handleSignUpSubmit : handleSignInSubmit}>
        {isSignUp && (
          <div>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Registrarse' : 'Iniciar sesión'}</button>
      </form>
      <button onClick={toggleSignInSignUp}>{isSignUp ? 'Ir a Iniciar sesión' : 'Ir a Registrarse'}</button>
    </div>
  );
};

export default SignInSignUp;