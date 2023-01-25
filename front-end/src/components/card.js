import PropTypes from 'prop-types';

function Card(props) {
  const { product } = props;
  const { price, urlImage, name, id } = product;
  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace(/\./, ',') }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        style={ { width: 100 } }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        -

      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        value="0"
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
      >
        +

      </button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default Card;
