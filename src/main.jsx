import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Components/Login/Login.jsx';
import Registerd from './Components/Registerd/Registerd.jsx';
import Heroregisterd from './Components/Herorgisterd/Heroregisterd.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,

      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/registerd",
        element:<Registerd></Registerd>,
      },
      {
       path:"/heroregisterd",
       element:<Heroregisterd></Heroregisterd>
      }
   

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
