import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import { cartReducer, orderReducer, productReducer, userReducer } from './reducers';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import CartPage from './pages/cartPage'
import CheckOutPage from './pages/checkoutPage';
import OrderPage from './pages/orderPage';
import ProductDetailsPage from './pages/productDetailPage';
import LoginSignUpPage from './pages/loginSignupPage';
import OrderSuccessPage from './pages/orderSuccessPage';
import ErrorPage from './pages/404';
import PrivateRoute from './components/privateRoute';



const store = configureStore(
  {
    reducer: {
      product: productReducer,
      cart: cartReducer,
      order: orderReducer,
      user: userReducer
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginSignUpPage />} />
          
          {/* Protected Routes */}
          <Route path="/" element={<App />}>
            <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path="checkout" element={<PrivateRoute><CheckOutPage /></PrivateRoute>} />
            <Route path="myorders" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
            <Route path="product/:productId" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
            <Route path="ordersuccess/:orderid" element={<PrivateRoute><OrderSuccessPage /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
