import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { logoutUserThunk } from '../../features/auth/authSlice';
import { isTokenValid } from '../../utils/token';

// RequireAuth component ensures that protected routes are only accessible when the user is authenticated.
// It also validates the stored JWT token and logs out the user if the token is expired or invalid.
const RequireAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem('token');

  // Validate token on each render; if invalid, clean up auth state and redirect.
  useEffect(() => {
    if (token && !isTokenValid(token)) {
      // Token expired or malformed – perform logout and clear state.
      dispatch(logoutUserThunk());
    }
    // No dependencies to run on every render; checks token freshness.
  }, [dispatch, token]);

  if (!isAuthenticated) {
    // Redirect unauthenticated users to the login page, preserving the intended destination.
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Render child routes for authenticated users.
  return <Outlet />;
};

export default RequireAuth;
