import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import { element } from 'prop-types';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import ErrorPage from './components/ErrorPage';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader: ()=>  fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({params})=>  fetch(`https://jsonplaceholder.typicode.com/users/${ params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:userId',
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/posts/${ params.userId}`),
        element: <PostDetails></PostDetails>
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)