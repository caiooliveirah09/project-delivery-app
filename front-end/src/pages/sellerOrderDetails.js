import React, { useEffect } from 'react';
import Nav from '../components/nav';
import api from '../services/api';

function SellerOrdersDetails() {
  const { pathname } = window.location;
  const idOrder = pathname.split('/')[3];
  const orderApi = async () => {
    const data = await api.get(`/sales_products/${idOrder}`);
    console.log(data.data);
    return data;
  };

  useEffect(() => {
    orderApi();
  }, []);

  return (
    <>
      <Nav />
      {/* {cart

        ? (
          <table>
            <thead>
              <tr>
                {items.map((element, index) => (
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

                  <th>
                    <button
                      data-testid={ `${custom}element-order-table-remove-${index}` }
                      type="button"
                      onClick={ removeItem }
                      id={ index }
                    >
                      REMOVE

                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>) : <p>Carregandodo</p>} */}
    </>
  );
}

export default SellerOrdersDetails;
