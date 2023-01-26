import { useEffect, useState } from 'react';
import Nav from '../components/nav';

function CustomerCheckout() {
  const [cart, setCart] = useState();
  const [expense, setExpense] = useState();
  const items = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-total',
    'Remover Item',
  ];
  const custom = 'customer_checkout__';

  function getCartItems() {
    const allCart = JSON.parse(localStorage.getItem('cart'));
    const newCart = allCart.filter((element) => element.quantity > 0);
    setCart(newCart);
  }

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    if (cart) {
      const expenseItem = cart
        .reduce((acc, curr) => acc + (Number(curr.price) * Number(curr.quantity)), 0);
      setExpense(expenseItem.toFixed(2).replace(/\./, ','));
    }
  }, [cart]);

  return (
    <div>
      <Nav />
      <div>
        {cart

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
                      >
                        REMOVE

                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>) : <p>Carregandodo</p>}
        <span>Total: R$</span>
        <span
          data-testid={ `${custom}element-order-total-price` }
        >
          {expense}

        </span>
      </div>
      <div>
        <select data-testid="customer_checkout__select-seller">
          <option>d</option>
        </select>
        <input data-testid="customer_checkout__input-address" />
        <input data-testid="customer_checkout__input-address-number" />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar input
        </button>
      </div>
    </div>
  );
}

export default CustomerCheckout;
