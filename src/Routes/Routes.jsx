import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
   
    children: [
      
        {
            path: '/login',
            element: <Login/>,
          },
          {
            path: '/register',
            element: <Register/>,
          },
     
       
       


    
    
    ]
  }

]);