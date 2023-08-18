import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import CEOLogin from './pages/Home/CEOLogin.js'; // Make sure to create this component as mentioned earlier
import { Routes ,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/ceo-login" element={<CEOLogin />} />,
    <Route path="/" element={<Home />} />
])
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

