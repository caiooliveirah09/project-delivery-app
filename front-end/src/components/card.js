import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

function Card(props) {
  const { product, setExpense } = props;
  const { price, urlImage, name, id } = product;
  const [quantity, setQuantity] = useState(0);

  const saveItens = ({ target }) => {
    const { value } = target;
    setQuantity(Number(value));
  };

  const add = async () => {
    setQuantity(quantity + 1);
  };

  const rm = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[id - 1].quantity = Number(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    const expense = cart
      .reduce((acc, curr) => acc + (Number(curr.price) * Number(curr.quantity)), 0);
    setExpense(expense);
  }, [quantity]);

  return (
    <div className="card-div">
      <p
        className="card-price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {' '}
        R$
        { price.replace(/\./, ',') }
      </p>
      <img
        className="card-image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p
        className="card-title"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <div className="card-button-input">
        <button
          className="card-button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ rm }
        >
          -

        </button>
        <input
          className="card-input"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ saveItens }
        />
        <button
          className="card-button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ add }
        >
          +

        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Card;
