import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Registration from "./pages/register"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1> SORRY....</h1>
  },
  {
    path: "/home.js",
    element: <Home/>,
    errorElement:<h1> SORRY....</h1>
  },
  {
    path: "/register",
    element: <Registration/>,
  },
]);




ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
  document.getElementById('root')
);
