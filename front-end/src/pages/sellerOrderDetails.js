import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import api from '../services/api';

const moment = require('moment');

function SellerOrdersDetails() {
  const [sell, setSell] = useState([]);
  // const [prep, setPrep] = useState(false);
  const { pathname } = window.location;
  const idOrder = pathname.split('/')[3];
  const items = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];
  const custom = 'seller_order_details__';

  const orderApi = async () => {
    const data = await api.get(`/sales_products/${idOrder}`);
    console.log(data);
    setSell(data.data);
    return data;
  };

  const statusButton = async (status) => {
    await api.put(`/sales_products/${idOrder}`, { status });
    orderApi();
  };

  useEffect(() => {
    orderApi();
  }, []);

  useEffect(() => {
  }, [sell]);

  return (
    <>
      <Nav />
      {sell.length > 0
        ? (
          <div>
            <span>PEDIDO</span>
            <p data-testid={ `${custom}element-order-details-label-order-id` }>
              {sell[0].id}
            </p>
            <p data-testid={ `${custom}element-order-details-label-order-date` }>
              {moment(sell[0].saleDate).format('DD/MM/YYYY')}
            </p>
            <p
              data-testid={ `${custom}element-order-details-label-delivery-status` }
            >
              {sell[0].status}

            </p>
            <button
              type="button"
              data-testid={ `${custom}button-preparing-check` }
              onClick={ () => statusButton('Preparando') }
              disabled={ (sell[0].status !== 'Pendente') }
            >
              PREPARAR PEDIDO

            </button>
            <button
              type="button"
              data-testid={ `${custom}button-dispatch-check` }
              disabled={ (sell[0].status !== 'Preparando') }
              onClick={ () => statusButton('Em Trânsito') }
            >
              SAIU PARA ENTREGA

            </button>
          </div>) : <div>Carregando</div>}
      {sell.length > 0
        ? (
          <div>
            <table>
              <thead>
                <tr>
                  {items.map((element, index) => (
                    <th key={ index }>{element}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                { sell[0].products.map((product, index) => (
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
                      {product.SaleProduct.quantity}

                    </th>
                    <th
                      data-testid={ `${custom}element-order-table-unit-price-${index}` }
                    >
                      {product.price
                        .replace(/\./, ',')}

                    </th>

                    <th
                      data-testid={ `${custom}element-order-table-sub-total-${index}` }
                    >
                      {(product.price * product.SaleProduct.quantity)
                        .toFixed(2).replace(/\./, ',')}

                    </th>
                  </tr>
                ))}
              </tbody>
            </table>

            <strong>
              <span>Total: R$</span>
              <span
                data-testid={ `${custom}element-order-total-price` }
              >
                {sell[0].totalPrice.replace(/\./, ',')}
              </span>
            </strong>
          </div>
        ) : <p>Carregando</p>}
    </>
  );
}

export default SellerOrdersDetails;
