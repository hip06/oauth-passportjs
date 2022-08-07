import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './redux'

const { store, persistor } = reduxStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={null} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

