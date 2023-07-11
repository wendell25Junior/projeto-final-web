import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cliente from '../componente/Cliente.jsx'
import Root from './routes/Menu.jsx'
import ErroPage from './erro-page.jsx'

import Item from '../componente/Item'





const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement: <ErroPage/>,

  },
  {
    path:"Item/",
    element:<Item/>,
  },

  {
    path:"Cliente/",
    element:<Cliente/>,

  },
  {
    path:"Cliente/Item",
    element:<Item/>,

  },
  
  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
