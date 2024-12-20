// src/index.js or src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';


// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);