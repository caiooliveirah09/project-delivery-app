import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import Nav from '../components/nav';
import api from '../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [apiIsLoaded, setApiIsLoaded] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
  const [expense, setExpense] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const logout = () => {
    setUserData({});
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    async function getProducts() {
      const result = await api.get('/products');
      setProducts(result.data);
      setApiIsLoaded(true);
      const cart = result.data.map((product) => ({ ...product, quantity: 0 }));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('expense', expense.toFixed(2).replace(/\./, ','));
    if (expense > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [expense]);

  return (
    <div>
      { userData && <Nav userData={ userData } logout={ logout } />}
      <div>
        { apiIsLoaded && products.map((product) => (
          <Card key={ product.id } product={ product } setExpense={ setExpense } />
        ))}
      </div>
      <div>
        <button
          data-testid="customer_products__button-cart"
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ isDisabled }
        >
          <span> Ver Carrinho: R$ </span>
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { expense.toFixed(2).replace(/\./, ',') }
          </span>

        </button>
      </div>
    </div>
  );
}

export default CustomerProducts;
