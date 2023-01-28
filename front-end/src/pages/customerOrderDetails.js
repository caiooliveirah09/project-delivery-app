import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Nav from '../components/nav';
import api from '../services/api';

function CustomerOrderDetails() {
  const { id } = useParams();
  const [cart, setCart] = useState();
  const [expense, setExpense] = useState();
  const [seller, setSeller] = useState();
  const [status, setStatus] = useState();
  const [date, setDate] = useState();
  const nine = 9;
  const thead = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];
  const custom = 'customer_checkout__';
  const custom2 = 'customer_order_details__';
  useEffect(() => {
    const getSale = async () => {
      const sale = await api.get(`/sales/${id}`);
      const { data } = sale;
      const sellerGET = await api.get(`/users/${data.sellerId}`);
      setSeller(sellerGET.data);
      setExpense(data.totalPrice.replace(/\./, ','));
      setStatus(data.status);
      const day = new Date(data.saleDate).getUTCDate();
      const month = new Date(data.saleDate).getUTCMonth();
      const year = new Date(data.saleDate).getFullYear();
      setDate(`${day}/${month + 1 < nine ? `0${month + 1}` : month + 1}/${year}`);
      const cartMAP = data
        .products.map(({ name, price, SaleProduct }) => ({
          name, price, quantity: SaleProduct.quantity }));
      setCart(cartMAP);
    };
    getSale();
  }, []);

  return (
    <div>
      <Nav />
      <h1>Detalhe do Pedido</h1>
      <h1
        data-testid={ `${custom2}element-order-details-label-order-id` }
      >
        PEDIDO
        {' '}
        { id }

      </h1>
      <h1 data-testid={ `${custom2}element-order-details-label-seller-name` }>
        { seller && seller.name }
      </h1>
      <h1
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {' '}
        { date }
        {' '}

      </h1>
      <h1
        data-testid={ `${custom2}element-order-details-label-delivery-status<index>` }
      >
        { status }
      </h1>

      <button
        type="button"
        data-testid={ `${custom2}button-delivery-check` }
        disabled="true"
      >
        MARCAR COMO ENTREGUE

      </button>
      {cart

        ? (
          <table>
            <thead>
              <tr>
                {thead.map((element, index) => (
                  <th key={ index }>{element}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              { cart.map((product, index) => (
                <tr key={ index }>
                  <th
                    data-testid={ `${custom}element-order-table-item-number-${index}` }
                  >
                    {index + 1}
                  </th>
                  <th
                    data-testid={ `${custom}element-order-table-name-${index}` }
                  >
                    {product.name}

                  </th>
                  <th
                    data-testid={ `${custom}element-order-table-quantity-${index}` }
                  >
                    {product.quantity}

                  </th>
                  <th
                    data-testid={ `${custom}element-order-table-unit-price-${index}` }
                  >
                    {product.price.replace(/\./, ',')}

                  </th>

                  <th
                    data-testid={ `${custom}element-order-table-sub-total-${index}` }
                  >
                    {(product.price * product.quantity).toFixed(2).replace(/\./, ',')}

                  </th>
                </tr>
              ))}
            </tbody>
          </table>) : <p>Carregandodo</p>}
      <span>Total: R$</span>
      <span
        data-testid={ `${custom2}element-order-total-price` }
      >
        {expense}

      </span>
    </div>
  );
}

CustomerOrderDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default CustomerOrderDetails;
