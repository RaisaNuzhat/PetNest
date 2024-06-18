import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import FirebaseProvider from './Firebaseprovider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    
    </FirebaseProvider>
  </React.StrictMode>,
)
