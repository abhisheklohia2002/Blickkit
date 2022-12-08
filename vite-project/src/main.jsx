import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { cartContext } from './Components/Context';
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
    <cartContext>
     <App />

    </cartContext>
    
    </BrowserRouter>
 
  </React.StrictMode>
)
