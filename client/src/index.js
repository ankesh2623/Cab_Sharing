import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-wckou6gjlgdqjec1.us.auth0.com"
      clientId="2C9AQypAkKfxLPi2sE5cTTKCvdHK1LJj"
      audience="LvShYXkd6s27PgeorbWtSJpkQt5LtkESMS96D08nyAQAU8iDuefM6BkxnTYXHoat"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
