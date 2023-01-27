import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './login';
import CustomerProducts from './customerProducts';
import Register from './register';
import Admin from './admin';
import SellerOrders from './sellerOrders';
import CustomerCheckout from './customerCheckout';
import CustomerOrderDetails from './customerOrderDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
        <Route path="/seller/orders" element={ <SellerOrders /> } />
        <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
        <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
