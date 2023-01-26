import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './login';
import CustomerProducts from './customerProducts';
import Register from './register';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
