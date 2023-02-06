import { useState, useEffect } from 'react';
import Nav from '../components/nav';
import OrderCard from '../components/orderCard';
import api from '../services/api';
import '../styles/customerOrders.css';

function CustomerOrders() {
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      const result = await api.get(`/sales/customer/${userData.id}`);
      console.log(result.data);
      setOrders(result.data);
      console.log(orders);
      setIsLoaded(true);
    };
    getUserOrders();
  }, []);

  return (
    <div className="customerOrders-div">
      <Nav />
      <h1 className="customerOrders-title">PEDIDOS</h1>
      <div className="customerOrders-div-card">
        { isLoaded && orders.map((order) => (
          <OrderCard
            key={ order.id }
            orderId={ order.id }
            orderStatus={ order.status }
            orderPrice={ order.totalPrice }
            orderDate={ order.saleDate }
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerOrders;
