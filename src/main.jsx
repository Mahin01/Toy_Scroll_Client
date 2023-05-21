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
          <AddToy></AddToy>
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
        loader: ({params}) => fetch(`http://localhost:5000/toy-details/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
