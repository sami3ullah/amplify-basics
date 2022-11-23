import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// configuring Amplify so it can wokr with backend services
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports'
// Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
