import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

import { Register } from "./pages/register";

import { Layout } from "./components/layout";
import { Clubes } from "./pages/clubes";
import { Details } from "./pages/details";
import { Dashboard } from "./pages/dashboard";
import { Private } from "./routes/private";

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/dashboard",
        element:<Private><Dashboard/></Private>
      },
      {
        path:"/clubes",
        element:<Private><Clubes/></Private>
      },
      {
        path:"/details/:id",
        element:<Private><Details/></Private>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])

export {router}

