import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../components/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/about',
            element: <About></About>

        },
        
      ]
    },
  ]);