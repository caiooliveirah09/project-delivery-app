import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        { date }

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
