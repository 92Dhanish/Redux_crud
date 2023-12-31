import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import store from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store.js';
// import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>

)
