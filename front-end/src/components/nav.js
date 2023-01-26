import PropTypes from 'prop-types';

export default function Nav(props) {
  const { userData, logout } = props;
  return (
    <nav>
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        PRODUTOS

      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        MEUS PEDIDOS

      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        { userData.name }

      </button>
      <button
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair

      </button>
    </nav>
  );
}

Nav.propTypes = {
  userData: PropTypes.object,
}.isRequired;
