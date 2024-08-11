import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
