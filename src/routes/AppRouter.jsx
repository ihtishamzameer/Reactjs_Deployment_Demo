// src/routes/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RequireAuth from '../Components/common/RequireAuth';
import Layout from '../Components/layout/Layout';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import PlaceholderPage from '../pages/PlaceholderPage'
import Portfolio from '../pages/Portfolio'
import ProjectsList from '../pages/ProjectsList'
import ProjectDetail from '../pages/ProjectDetail'
import BlogList from '../pages/BlogList'
import BlogPost from '../pages/BlogPost'
import ResumePage from '../pages/ResumePage'
import ContactPage from '../pages/ContactPage'

const router = createBrowserRouter([
  // ─── Public portfolio routes ─────────────────────────────────────
  { path: '/', element: <Portfolio /> },
  { path: '/projects', element: <ProjectsList /> },
  { path: '/projects/:slug', element: <ProjectDetail /> },
  { path: '/blog', element: <BlogList /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/resume', element: <ResumePage /> },
  { path: '/contact', element: <ContactPage /> },

  // ─── Protected routes (require auth) ────────────────────────
  {
    element: <RequireAuth />,
    children: [
      {
        path: '/dashboard',
        element: <Layout />, // layout includes sidebar/topbar
        children: [
          { index: true, element: <Home /> },
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
    ],
  },

  // ─── Standalone auth pages (no sidebar) ─────────────────────────
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter