import React, { useEffect, useState } from 'react';
import api from '../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [apiIsLoaded, setApiIsLoaded] = useState(false);
  useEffect(() => {
    async function getProducts() {
      const result = await api.get('/products');
      setProducts(result.data);
      setApiIsLoaded(true);
    }
    getProducts();
  }, []);
  return (
    <div>
      <nav>
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          PRODUTOS

        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          MEUS PEDIDOS

        </button>
        <button
          data-testid="customer_products__element-navbar-user-full-name"
          type="button"
        >
          Nome da pessoa

        </button>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          Sair

        </button>
      </nav>
      <div>
        { apiIsLoaded && products.map((product) => (
          <div key={ product.id }>
            <p
              data-testid={ `customer_products__element-card-price-${product.id}` }
            >
              { product.price }
            </p>
            <img
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              src={ product.urlImage }
              alt={ product.name }
              style={ { width: 100 } }
            />
            <p data-testid={ `customer_products__element-card-title-${product.id}` }>
              { product.name }
            </p>
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
            >
              -

            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
            >
              +

            </button>
          </div>
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
