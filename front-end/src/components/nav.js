import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const logout = () => {
    setUserData({});
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navigateToProducts = () => {
    navigate('/customer/products');
  };

  const navigateToOrders = () => {
    if (userData.role === 'seller') navigate('/seller/orders');
    if (userData.role === 'customer') navigate('/customer/orders');
  };

  return (
    <nav>
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
        onClick={ navigateToProducts }
      >
        PRODUTOS
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        onClick={ navigateToOrders }
      >
        MEUS PEDIDOS
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        <strong>{userData && userData.name }</strong>
      </button>
      <button
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        SAIR
      </button>
    </nav>
  );
}

Nav.propTypes = {
  userData: PropTypes.object,
}.isRequired;
