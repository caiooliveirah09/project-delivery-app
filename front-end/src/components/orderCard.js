import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/orderCard.css';

function OrderCard(props) {
  const { orderId, orderStatus, orderPrice, orderDate } = props;
  const [date, setDate] = useState();
  const navigate = useNavigate();
  const nine = 9;

  const navigateToDetails = () => {
    navigate(`/customer/orders/${orderId}`);
  };

  useEffect(() => {
    const day = new Date(orderDate).getUTCDate();
    const month = new Date(orderDate).getUTCMonth();
    const year = new Date(orderDate).getFullYear();
    setDate(`${day < nine ? `0${day}` : day}`
      + `/${month + 1 < nine ? `0${month + 1}` : month + 1}`
      + `/${year}`);
  });

  return (
    <button
      className="orderCard-button"
      onClick={ navigateToDetails }
      onKeyDown={ navigateToDetails }
      type="button"
    >
      <div>
        <p>Pedido</p>
        <p data-testid={ `customer_orders__element-order-id-${orderId}` }>
          {' '}
          {orderId}
        </p>
      </div>
      <p
        data-testid={ `customer_orders__element-delivery-status-${orderId}` }
      >
        { orderStatus }

      </p>
      <div>
        <p
          data-testid={ `customer_orders__element-order-date-${orderId}` }
        >
          { date }

        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${orderId}` }
        >
          {' '}
          R$
          { orderPrice.replace(/\./, ',') }

        </p>
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  orderDate: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
  orderPrice: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
};

export default OrderCard;
