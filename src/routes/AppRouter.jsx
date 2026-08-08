// src/routes/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Components/layout/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import PlaceholderPage from '../pages/PlaceholderPage'

const router = createBrowserRouter([
  // ─── App shell (sidebar + topbar) ───────────────────────────────
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Home /> },
      {
        path: 'projects',
        element: <PlaceholderPage title="Projects" description="Manage and track all your projects in one place." />,
      },
      {
        path: 'tasks',
        element: <PlaceholderPage title="Tasks" description="Create, assign, and track tasks across all projects." />,
      },
      {
        path: 'calendar',
        element: <PlaceholderPage title="Calendar" description="View your project timeline and upcoming deadlines." />,
      },
      {
        path: 'analytics',
        element: <PlaceholderPage title="Analytics" description="Dive deep into project performance metrics." />,
      },
      {
        path: 'settings',
        element: <PlaceholderPage title="Settings" description="Configure your account and application preferences." />,
      },
      {
        path: 'help',
        element: <PlaceholderPage title="Help" description="Documentation, guides, and support resources." />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },

  // ─── Standalone auth pages (no sidebar) ─────────────────────────
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter