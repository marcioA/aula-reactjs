import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Duvidas from './componentes/Duvidas';
import Configuracao from './componentes/Configuracao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/duvidas' element={<Outlet />} >
          <Route index element={<Duvidas />} />
          <Route path='configuracao' element={<Configuracao />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);