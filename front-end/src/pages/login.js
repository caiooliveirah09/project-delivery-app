import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import appContext from '../context/appContext';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);
  const { setUserData } = useContext(appContext);
  const navigate = useNavigate();

  const validateEmailAndPassword = () => {
    const minLengthPassword = 6;
    const emailRegex = /\S+@\S+\.\S+/;
    return !(emailRegex.test(email) && password.length >= minLengthPassword);
  };

  const login = async () => {
    try {
      const result = await api.post('/login', { email, password });
      setUserData(result.data);
      localStorage.setItem('userData', JSON.stringify(result.data));
      navigate('/customer/products');
    } catch (error) {
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    setIsDisabled(validateEmailAndPassword());
  }, [email, password]);

  return (
    <div>
      <input
        data-testid="common_login__input-email"
        type="email"
        placeholder="email"
        name="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_login__input-password"
        type="password"
        name="password"
        placeholder="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        onClick={ login }
        type="button"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Register
      </button>
      {isInvalid && (
        <p data-testid="common_login__element-invalid-email">Email invalido</p>
      )}
    </div>
  );
}

export default Login;
