import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/nav';
import api from '../services/api';

function Admin() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');

  const [isDisabled, setIsDisabled] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false);

  const navigate = useNavigate();

  const validateUserData = () => {
    const minLengthPassword = 6;
    const minLengthUserName = 12;
    const emailRegex = /\S+@\S+\.\S+/;

    return !(
      emailRegex.test(email)
      && password.length >= minLengthPassword
      && userName.length >= minLengthUserName
    );
  };

  const register = async () => {
    try {
      const result = await api
        .post('/register', { name: userName, email, password, role });
      localStorage.setItem('user', JSON.stringify(result.data));
    } catch (error) {
      console.log(error);
      setIsInvalid(true);
    }
  };

  const logout = () => {
    setUserData({});
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    setIsDisabled(validateUserData());
  }, [userName, email, password, role]);

  return (
    <>
      { userData && <Nav userData={ userData } logout={ logout } />}
      <fieldset>
        <legend>Admin Manage Users</legend>
        <div>
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="name"
            value={ userName }
            onChange={ (e) => setUserName(e.target.value) }
          />
          <input
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <select
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="customer">customer</option>
            <option value="seller">seller</option>
            <option value="administrator">administrator</option>
          </select>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            onClick={ register }
            disabled={ isDisabled }
          >
            Register
          </button>
        </div>
        {isInvalid && (
          <p data-testid="common_register__element-invalid_register">Invalid Register</p>
        )}
      </fieldset>
    </>
  );
}

export default Admin;
