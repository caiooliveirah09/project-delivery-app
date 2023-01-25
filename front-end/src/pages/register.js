import React from 'react';

function Register() {
  return (
    <div>
      <input
        data-testid="common_register__input-name"
        type="text"
        placeholder="name"
        name="name"
        // value={ userName }
        // onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        placeholder="email"
        name="email"
        // value={ email }
        // onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        name="password"
        placeholder="password"
        // value={ password }
        // onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        onClick={ () => navigate('/register') }
      >
        Register
      </button>
      {/* {isInvalid && ( */}
      <p data-testid="common_register__element-invalid_register">
        Registro invalido
      </p>
      {/* )} */}
    </div>
  );
}

export default Register;
