import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Newshop from './Component/Newshop/Newshop';
import Revue from './Component/Revue/Revue';
import Cart from './Component/Cart/Cart';
const roouter=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/Shop",
        element:<Newshop></Newshop>

      },
      {
        path:"/Revue",
        element:<Revue></Revue>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={roouter}>

    </RouterProvider> */}
    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
