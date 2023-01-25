import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import Nav from '../components/nav';
import api from '../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [apiIsLoaded, setApiIsLoaded] = useState(false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const logout = () => {
    setUserData({});
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    async function getProducts() {
      const result = await api.get('/products');
      setProducts(result.data);
      setApiIsLoaded(true);
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function validateToken(token) {
      const result = await api.post('/validateToken', { token });
      return result;
    }
    if (userData) {
      const { token } = userData;
      if (!validateToken(token)) navigate('/login');
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      { userData && <Nav userData={ userData } logout={ logout } />}
      <div>
        { apiIsLoaded && products.map((product) => (
          <Card key={ product.id } product={ product } />
        ))}
      </div>
      <div>
        <button
          data-testid="customer_products__button-cart"
          type="button"
        >
          <p data-testid="customer_products__checkout-bottom-value">Ver Carrinho: R$ </p>

        </button>
      </div>
    </div>
  );
}

export default CustomerProducts;
