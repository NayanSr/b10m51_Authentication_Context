import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Orders from './components/Orders';
import Mainlayout from './components/Mainlayout';
import PrivateRoute from './PrivateRoute';
import AuthProvider from './providers/AuthProvider';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
      {path: '/', element: <Home/>},
      {path:'/register', element: <Register/>},
      {path:'/login', element: <Login/>},
      {path:'/order', element: <PrivateRoute><Orders/></PrivateRoute>},
      {path:'profile', element:<PrivateRoute><Profile/></PrivateRoute>}
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
