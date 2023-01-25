import React, { useState, useEffect } from 'react';

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  // const [isInvalid, setIsInvalid] = useState(false);
  // const { setUserData } = useContext(appContext);
  // const navigate = useNavigate();

  const validateUserData = () => {
    const minLengthPassword = 6;
    const minLengthUserName = 12;
    const emailRegex = /\S+@\S+\.\S+/;

    return !(emailRegex.test(email)
    && password.length >= minLengthPassword
    && userName.length >= minLengthUserName);
  };

  // const register = async () => {
  //   try {
  //     const result = await api.post('/login', { email, password });
  //     navigate('/register');
  //   } catch (error) {
  //     setIsInvalid(true);
  //   }
  // };

  useEffect(() => {
    setIsDisabled(validateUserData());
  }, [userName, email, password]);

  return (
    <div>
      <input
        data-testid="common_register__input-name"
        type="text"
        placeholder="name"
        name="name"
        value={ userName }
        onChange={ (e) => setUserName(e.target.value) }
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        placeholder="email"
        name="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        name="password"
        placeholder="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        // onClick={ register }
        disabled={ isDisabled }
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
