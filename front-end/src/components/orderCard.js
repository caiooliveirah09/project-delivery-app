import PropTypes from 'prop-types';

function OrderCard(props) {
  const { orderId, orderStatus, orderPrice, orderDate } = props;
  return (
    <div>
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
        { orderPrice }

      </h2>
      <h2
        data-testid={ `customer_orders__element-order-date-${orderId}` }
      >
        { orderDate }

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
