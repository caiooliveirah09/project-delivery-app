import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import api from '../services/api';

function SellerOrdersDetails() {
  const [sell, setSell] = useState([]);
  const { pathname } = window.location;
  const idOrder = pathname.split('/')[3];
  const orderApi = async () => {
    const data = await api.get(`/sales_products/${idOrder}`);
    console.log(data);
    setSell(data.data);
    return data;
  };
  const items = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
  ];
  const custom = 'seller_order_details__';

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
            <spam data-testid={ `${custom}element-order-details-label-order-id` }>
              {sell[0].id}
            </spam>
            <spam data-testid={ `${custom}element-order-details-label-order-date` }>
              {sell[0].saleDate}
            </spam>
            <spam
              data-testid={ `${custom}element-order-details-label-delivery-status` }
            >
              {sell[0].status}

            </spam>
            <button
              type="button"
              data-testid={ `${custom}button-preparing-check` }
            >
              PREPARAR PEDIDO

            </button>
            <button
              type="button"
              data-testid={ `${custom}button-dispatch-check` }
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
                {sell[0].totalPrice}
              </span>
            </strong>
          </div>
        ) : <p>Carregando</p>}
    </>
  );
}

export default SellerOrdersDetails;
