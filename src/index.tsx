import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Detail from './pages/Detail';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
axios.defaults.withCredentials = true;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
