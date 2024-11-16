import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mainlayout from './assets/components/Mainlayout';
import Home from './assets/components/Home';
import Register from './assets/components/Register';
import Login from './assets/components/Login';
import AuthProvider from './assets/providers/AuthProvider';
import Orders from './assets/components/Orders';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
      {path: '/', element: <Home/>},
      {path:'/register', element: <Register/>},
      {path:'/login', element: <Login/>},
      {path:'/order', element: <PrivateRoute><Orders/></PrivateRoute>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
