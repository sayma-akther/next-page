import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "books",
        element:<Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:bookId',
        element:<BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: 'loader',
        element: <LoadingSpinner />,
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
