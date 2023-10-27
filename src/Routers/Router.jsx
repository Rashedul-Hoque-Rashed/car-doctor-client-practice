import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import Cart from "../Pages/Cart/Cart";
import PrivateRouter from "./PrivateRouter";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <SingUp/>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRouter><Checkout/></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/cart',
          element: <PrivateRouter><Cart/></PrivateRouter>
        }
      ]
    },
  ]);