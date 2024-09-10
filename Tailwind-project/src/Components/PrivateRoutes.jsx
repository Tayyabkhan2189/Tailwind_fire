import React from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from '../Auth-config-fire/Auth-fire'; // Import your auth configuration

const PrivateRoute = ({ children }) => {
  const user = Auth.currentUser; // Get the currently logged-in user

  if (!user) {
    // If user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the protected component
  return children;
};

export default PrivateRoute;
