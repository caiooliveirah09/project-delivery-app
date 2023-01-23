import React from 'react';

function Login() {
  return (
    <div>
      <input
        data-testid="common_login__input-email"
        type="email"
        placeholder="email"
      />
      <input
        data-testid="common_login__input-password"
        type="password"
        placeholder="password"
      />
      <button type="button" data-testid="common_login__button-login">
        Login
      </button>
      <button type="button" data-testid="common_login__button-register">
        Ainda não tenho conta
      </button>
      <p data-testid="common_login__element-invalid-email">aaaaa</p>
    </div>
  );
}

export default Login;
