import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/nav.css';

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
    <div className="nav-div">
      <nav className="nav-comp">
        <button
          className="nav-btn"
          data-testid="customer_products__element-navbar-link-products"
          type="button"
          onClick={ navigateToProducts }
        >
          PRODUTOS
        </button>
        <button
          className="nav-btn"
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ navigateToOrders }
        >
          MEUS PEDIDOS
        </button>
        <button
          className="nav-btn"
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          {userData && userData.name }
        </button>
        <button
          className="logout-btn"
          onClick={ logout }
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          SAIR
        </button>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  userData: PropTypes.object,
}.isRequired;
