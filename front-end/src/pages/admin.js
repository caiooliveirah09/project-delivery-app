import React, { useState, useEffect } from 'react';

function Admin() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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

  useEffect(() => {
    setIsDisabled(validateUserData());
  }, [userName, email, password, role]);

  return (
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
          onClick={ () => {} }
          disabled={ isDisabled }
        >
          Register
        </button>
      </div>
    </fieldset>
  );
}

export default Admin;
