import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.js'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="685450108161-bssnieooonsit4lado75mjanscsn7ds3.apps.googleusercontent.com">
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    </GoogleOAuthProvider>,
)