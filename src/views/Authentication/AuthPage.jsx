import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import CustomButton from '../../components/CustomButton';
import "../../styles/Form.css"
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const { user, signIn, signUp, isSignUp, setIsSignUp } = useContext(AuthContext);

  const navigate = useNavigate();
  
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
    try {
      await signIn(email, password).then((res) => {
        setErrorMsg(res)
      });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(username, email, password).then((res) => {
        setErrorMsg(res)
      });
  } catch (error) {
      console.error('Error al iniciar sesión:', error);
  }
  };

  useEffect(() => {
    if (errorMsg === false) {
      navigate('/');
    }
  }, [errorMsg]);

  const toggleSignInSignUp = () => {
    setErrorMsg(null);
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={'main-content'}>
      <section className="flex-box">
      {isSignUp ? (
        <h1>Registrarse</h1>
      ) : (
        <h1>Iniciar sesión</h1>
      )}
      { errorMsg && <p className={'error'}>{errorMsg}</p> }
      <form onSubmit={isSignUp ? handleSignUpSubmit : handleSignInSubmit} id="auth-form">
        {isSignUp && (
          <div className={'input-container'}>
            <label htmlFor="username">Nombre de usuario</label>
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
        <div className={'input-container'}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={'input-container'}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {/* <CustomButton onClick={() => document.getElementById('auth-form').submit()}>{isSignUp ? 'Registrarse' : 'Iniciar sesión'}</CustomButton> */}
        <button type='submit' >{isSignUp ? 'Registrarse' : 'Iniciar sesión'}</button>
      </form>
      <CustomButton type={'text'} mode='secondary' onClick={toggleSignInSignUp}>{isSignUp ? 'Iniciar sesión' : 'Registrarse'}</CustomButton>
      </section>
    </div>
  );
};

export default AuthPage;