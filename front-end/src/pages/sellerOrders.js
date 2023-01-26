import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/nav';

function SellerOrders() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

  const navigate = useNavigate();

  const logout = () => {
    setUserData({});
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      { userData && <Nav userData={ userData } logout={ logout } />}
      <fieldset>
        <legend>Seller Orders</legend>
      </fieldset>
    </>
  );
}

export default SellerOrders;
