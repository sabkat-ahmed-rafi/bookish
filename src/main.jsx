import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from'react-router-dom'
import LayOut from './LayOut.jsx'
import ListedBooks from './components/ListedBooks'
import PagesToRead from './components/PagesToRead'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path:'listedBooks',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
