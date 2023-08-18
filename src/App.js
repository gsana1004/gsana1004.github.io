import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import CEOLogin from './pages/Home/CEOLogin.js'; // Make sure to create this component as mentioned earlier
import { Routes ,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/ceo-login" element={CEOLogin} />,
//       <Route path="/" element={Home} />
//     )
//   )
//     return (
//       <RouterProvider router={router} />
//     );
}

export default App;
