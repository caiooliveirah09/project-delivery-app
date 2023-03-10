import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/nav';
import api from '../services/api';
import '../styles/sellerOrders.css';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));
  const nine = 9;

  const navigate = useNavigate();

  async function getSales() {
    const result = await api.get(`/sales/seller/${userData.id}`);
    console.log(result.data);
    setSales(result.data);
  }

  const formatCurrency = (price) => new Intl.NumberFormat(
    'pt-br',
    { style: 'currency', currency: 'BRL' },
  ).format(price);

  const testIds = {
    id: 'seller_orders__element-order-id-',
    status: 'seller_orders__element-delivery-status-',
    date: 'seller_orders__element-order-date-',
    address: 'seller_orders__element-card-address-',
    price: 'seller_orders__element-card-price-',
  };

  useEffect(() => {
    getSales();
  }, []);

  function setDate(date) {
    const day = new Date(date).getUTCDate();
    const month = new Date(date).getUTCMonth();
    const year = new Date(date).getFullYear();
    return (`${day < nine ? `0${day}` : day}`
        + `/${month + 1 < nine ? `0${month + 1}` : month + 1}`
        + `/${year}`);
  }

  return (
    <div className="sellerOrders-div">
      <Nav />
      <h1 className="sellerOrders-title">PEDIDOS</h1>
      <div className="sellerOrders-cards">
        {
          sales.map((sale) => (
            <button
              className="sellerOrders-card"
              key={ sale.id }
              type="button"
              onClick={ () => navigate(`/seller/orders/${sale.id}`) }
            >
              <div>
                <p>Pedido</p>
                <p data-testid={ `${testIds.id}${sale.id}` }>{ sale.id }</p>
              </div>
              <p data-testid={ `${testIds.status}${sale.id}` }>{sale.status}</p>
              <div>
                <p data-testid={ `${testIds.date}${sale.id}` }>
                  {setDate(sale.saleDate)}

                </p>
                <p data-testid={ `${testIds.price}${sale.id}` }>
                  {formatCurrency(sale.totalPrice)}
                </p>
                <p data-testid={ `${testIds.address}${sale.id}` }>
                  {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
                </p>

              </div>
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default SellerOrders;
