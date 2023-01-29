import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function OrderCard(props) {
  const { orderId, orderStatus, orderPrice, orderDate } = props;
  const myDate = new Date(orderDate);
  const fixedDate = `${
    myDate.getDate()}/01/${myDate.getFullYear()}`;
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/customer/orders/${orderId}`);
  };

  return (
    <div
      onClick={ navigateToDetails }
      onKeyDown={ navigateToDetails }
      role="presentation"
    >
      <p data-testid={ `customer_orders__element-order-id-${orderId}` }>
        Pedido
        {orderId}
      </p>
      <h1
        data-testid={ `customer_orders__element-delivery-status-${orderId}` }
      >
        { orderStatus }

      </h1>
      <h2
        data-testid={ `customer_orders__element-card-price-${orderId}` }
      >
        { orderPrice.replace(/\./, ',') }

      </h2>
      <h2
        data-testid={ `customer_orders__element-order-date-${orderId}` }
      >
        { fixedDate }

      </h2>
    </div>
  );
}

OrderCard.propTypes = {
  orderDate: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
  orderPrice: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrderCard;
