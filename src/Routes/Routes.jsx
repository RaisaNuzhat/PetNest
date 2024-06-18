import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import Home from '../Pages/Home';
import DonationCampaigns from '../Pages/DonationCampaigns';
import PetListing from '../Pages/PetListing';
import DashBoardLayout from '../layout/DashBoardLayout';
import AddAPet from '../Pages/Dashboard/User/AddAPet';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
   
    children: [
        {
            path: '/',
            element: <Home/>,
          },
          {
            path: '/petlisting',
            element: <PetListing/>,
          },
          {
            path: '/donationcampaigns',
            element: <DonationCampaigns/>,
          },
        {

            path: '/login',
            element: <Login/>,
          },
          {
            path: '/register',
            element: <Register/>,
          },
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout/>,
    children:
    [
        {

            path: 'addapet',
            element: <AddAPet/>,
          },
        //   {

        //     path: 'myaddedpets',
        //     element: </>,
        //   },
        

    ]
  },

]);