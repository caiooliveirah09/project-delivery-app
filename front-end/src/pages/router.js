import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
