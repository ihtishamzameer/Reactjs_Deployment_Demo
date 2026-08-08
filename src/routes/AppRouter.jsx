import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    { path: 'register', element: <Register /> }
    ]
  }
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter