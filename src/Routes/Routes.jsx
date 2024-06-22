import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register'
import Home from '../Pages/Home';
import DonationCampaigns from '../Pages/DonationCampaigns';
import PetListing from '../Pages/PetListing';
import DashBoardLayout from '../layout/DashBoardLayout';
import AddAPet from '../Pages/Dashboard/User/AddAPet';
import MyAddedPets from '../Pages/Dashboard/User/MyAddedPets';
import UpdatePet from '../Pages/Dashboard/User/UpdatePet';
import CreateDonationCamp from '../Pages/Dashboard/User/CreateDonationCamp';
import ViewDetails from '../Pages/ViewDetails';
import MyDonationCampaigns from '../Pages/Dashboard/User/MyDonationCampaigns';
import ErrorPage from '../components/ErrorPage';
import EditDonation from '../Pages/Dashboard/User/EditDonation';
import ViewDonationDetails from '../Pages/ViewDonationDetails';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers';
import Privateroute from '../components/Privateroute';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>,
          },
          {
            path: '/petlisting',
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/pets`),
            element: <PetListing/>,
          },
          {
            path: '/donationcampaigns',
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/donations`),
            element: <DonationCampaigns/>,
          },
        {

            path: '/login',
            element: <Login/>,
          },
          {

            path: '/viewdetails/:id',
            loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/pets/${params.id}`),
            element: <Privateroute><ViewDetails/></Privateroute>,
          },
         {
          path: 'viewdonationdetails/:id',
          loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/donations/${params.id}`),
          element:<Privateroute><ViewDonationDetails/></Privateroute>,
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
          //index:true,
            path: 'addapet',
            element: <AddAPet/>,
          },
          {
            path:'allusers',
            element:<AllUsers/>
          },
         {
            path: 'myaddedpets',
             element: <MyAddedPets/>,
           },
           {
            path: 'createdonationcamp',
             element: <CreateDonationCamp/>,
           },
           {
            path: 'mydonationcamp',
             element: <MyDonationCampaigns/>,
           },
           {
            path: 'updatepet/:id',
            loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/pets/${params.id}`),
             element: <UpdatePet/>,
           },
           {
            path: 'editdonation/:id',
            loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/donations/${params.id}`),
             element: <EditDonation/>,
           },
    ]
  },

]);