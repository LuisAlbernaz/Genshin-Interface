import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PaginaInicial from './PaginaInicial';
import PaginaElemento from './PaginaElemento';
import PaginaArma from './PaginaArma';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const roteador = createBrowserRouter([
  {path: '/', element: <PaginaInicial />},
  {path: 'elemento/:elemento', element: <PaginaElemento/>},
  {path: 'arma/:arma', element: <PaginaArma/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={roteador} />
  </React.StrictMode>
);


reportWebVitals();
