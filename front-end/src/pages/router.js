import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './login';
import CustomerProducts from './customerProducts';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
