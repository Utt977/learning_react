import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Navbar from './components/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar home="Home" service="Service" about="About Us" />
    {/* <App /> */}
  </React.StrictMode>
);

