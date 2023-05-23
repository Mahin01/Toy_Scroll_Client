import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddToy from './pages/AddToy/AddToy';
import AllToys from './pages/AllToys/AllToys';
import ToyDetails from './pages/AllToys/ToyDetails/ToyDetails';
import Blog from './pages/Blog/Blog';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoutes';
import MyToys from './pages/MyToys/MyToys';
import Error from './pages/ErrorPage/Error';
import UpdateToy from './pages/UpdateToy/UpdateToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toy-scroll-server.vercel.app/toy-details/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add-a-toy",
        element: 
        <PrivateRoute>
          <AddToy></AddToy>
        </PrivateRoute>
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>
      },
      {
        path:"/toy-details/:id",
        element: 
        <PrivateRoute>
          <ToyDetails></ToyDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-scroll-server.vercel.app/toy-details/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>,
    errorElement: <Error></Error>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
